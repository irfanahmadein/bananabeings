export function BananaMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M16 34c8 9 22 6 25-5 1.4-4.2-.4-8-4.2-9-5.4 6.4-13.4 5.6-18.2.2 1.4 4 .6 8.2-2.6 13.8z"
        fill="#f0c14b"
      />
      <path
        d="M36 12c2.4 3-.2 6.2-3.2 7.4"
        stroke="#c9842a"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1 leading-none ${className}`}>
      <span className="text-[17px] font-extrabold lowercase tracking-[-0.05em]">banana</span>
      <span className="text-[17px] font-extrabold lowercase tracking-[-0.05em] text-peel">beings</span>
    </span>
  );
}
