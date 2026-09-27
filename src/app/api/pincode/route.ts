import { NextResponse } from "next/server";

type PostOffice = { Name?: string; District?: string; State?: string };
type PostalResponse = { Status?: string; PostOffice?: PostOffice[] | null };

export async function GET(request: Request) {
  const pin = new URL(request.url).searchParams.get("pin")?.trim() ?? "";
  if (!/^[1-9]\d{5}$/.test(pin)) {
    return NextResponse.json({ ok: false, message: "That isn’t an Indian pincode." });
  }

  try {
    const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`, {
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, message: "Couldn’t check that pincode. Try again." });
    }
    const data = (await res.json()) as PostalResponse[];
    const row = data[0];
    const office = row?.PostOffice?.[0];
    const city = office?.District?.replace(/\s+/g, " ").trim();
    const state = office?.State?.replace(/\s+/g, " ").trim();
    const officeName = (office?.Name ?? city)?.replace(/\s+/g, " ").trim();
    if (row?.Status !== "Success" || !city || !state || !officeName) {
      return NextResponse.json({ ok: false, message: "That isn’t an Indian pincode." });
    }
    const place = officeName.toLowerCase() === city.toLowerCase() ? `${city}, ${state}` : `${officeName}, ${city}, ${state}`;
    return NextResponse.json({
      ok: true,
      office: officeName,
      city,
      state,
      message: `Delivers to ${place}. A real order would arrive in 2–5 days. This shop is a demo, so nothing is shipped.`,
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Couldn’t check that pincode. Try again." });
  }
}
