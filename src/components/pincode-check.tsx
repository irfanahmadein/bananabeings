"use client";

import { FormEvent, useState } from "react";

type Result = { ok: true; message: string } | { ok: false; message: string };

export function PincodeCheck() {
  const [pin, setPin] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const value = pin.trim();
    if (!/^[1-9]\d{5}$/.test(value)) {
      setResult({ ok: false, message: "That isn’t an Indian pincode." });
      return;
    }
    setPending(true);
    try {
      const res = await fetch(`/api/pincode?pin=${value}`);
      const data = (await res.json()) as Result;
      setResult(data.ok ? data : { ok: false, message: data.message || "That isn’t an Indian pincode." });
    } catch {
      setResult({ ok: false, message: "Couldn’t check that pincode. Try again." });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 border-t border-line pt-6">
      <label htmlFor="pincode" className="text-sm font-semibold">
        Delivery pincode
      </label>
      <p className="mt-1 text-xs text-muted">Indian pincodes only. Six digits, and nothing is shipped from this demo.</p>
      <div className="mt-3 flex gap-2">
        <input
          id="pincode"
          name="pin"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={6}
          placeholder="560001"
          value={pin}
          onChange={(event) => setPin(event.target.value.replace(/\D/g, "").slice(0, 6))}
          className="h-11 w-32 rounded-full border border-line bg-card px-4 text-sm outline-none ring-banana focus:ring-2"
        />
        <button type="submit" disabled={pending} className="h-11 rounded-full border border-ink px-4 text-sm font-semibold">
          {pending ? "Checking" : "Check"}
        </button>
      </div>
      {result ? (
        <p className={`mt-3 text-sm leading-6 ${result.ok ? "text-ink" : "text-peel"}`} role="status">
          {result.message}
        </p>
      ) : null}
    </form>
  );
}
