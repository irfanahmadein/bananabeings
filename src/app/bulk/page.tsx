"use client";

import { FormEvent, useState } from "react";

export default function BulkPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-xl px-5 py-14 sm:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Campus & bulk</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-[-0.045em]">Tees for a whole room.</h1>
      <p className="mt-4 leading-7 text-muted">
        Fest stalls, hostel orders, a company offsite that still wants a soft shirt. Tell us the count. This form stays in the browser.
      </p>
      {sent ? (
        <p className="mt-8 rounded-2xl bg-banana px-5 py-4 font-medium">Noted. A real shop would reply with a quote. This one just says thanks.</p>
      ) : (
        <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
          <label className="text-sm font-medium">
            Name
            <input required name="name" className="mt-1 w-full rounded-xl border border-line bg-card px-3 py-2.5 font-normal" />
          </label>
          <label className="text-sm font-medium">
            Email
            <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-line bg-card px-3 py-2.5 font-normal" />
          </label>
          <label className="text-sm font-medium">
            How many tees?
            <input required name="qty" inputMode="numeric" className="mt-1 w-full rounded-xl border border-line bg-card px-3 py-2.5 font-normal" />
          </label>
          <label className="text-sm font-medium">
            Note
            <textarea name="note" rows={4} className="mt-1 w-full rounded-xl border border-line bg-card px-3 py-2.5 font-normal" />
          </label>
          <button type="submit" className="rounded-full bg-ink py-3 text-sm font-semibold text-card">
            Request a quote
          </button>
        </form>
      )}
    </div>
  );
}
