"use client";

import { FormEvent, useState } from "react";

export default function HelpPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-xl px-5 py-14 sm:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Help</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-[-0.045em]">Ask us</h1>
      <p className="mt-3 text-sm leading-6 text-muted">
        Size, cloth, a campus order. This form doesn’t email anyone — it only confirms on the page, because the shop is a demo.
      </p>
      {sent ? (
        <p className="mt-8 rounded-2xl bg-leaf px-5 py-4 text-card">Got it. In a real shop this would land in an inbox. Here, it stops on this screen.</p>
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
            What do you need?
            <textarea required name="message" rows={5} className="mt-1 w-full rounded-xl border border-line bg-card px-3 py-2.5 font-normal" />
          </label>
          <button type="submit" className="rounded-full bg-ink py-3 text-sm font-semibold text-card">
            Send
          </button>
        </form>
      )}
    </div>
  );
}
