import { inkOn } from "@/lib/money";

export function BananaMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M8 23c6 6 14 4.5 18-2.5 1.4-2.2.4-4.4-2-5.1-4.2 4.6-10 4.2-14.4.6.8 2.4.2 4.8-1.6 7z"
        fill="#f0c14b"
        stroke="#1a1814"
        strokeWidth="1.3"
      />
      <path
        d="M23 7.5c1.6 2.4-.6 5-2.8 6.2"
        stroke="#24382b"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`leading-none ${className}`}>
      <span className="block text-[15px] font-semibold tracking-[-0.03em]">Banana</span>
      <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        Beings
      </span>
    </span>
  );
}

export function TeeArt({
  color,
  print,
  maskId,
  className = "",
}: {
  color: string;
  print?: string;
  maskId: string;
  className?: string;
}) {
  const ink = inkOn(color);
  return (
    <svg viewBox="0 0 200 230" className={className} role="img" aria-label={print ? `Tee printed ${print}` : "Tee"}>
      <ellipse cx="100" cy="208" rx="46" ry="8" fill="#1a1814" opacity="0.08" />
      <mask id={maskId}>
        <rect width="200" height="230" fill="white" />
        <ellipse cx="100" cy="52" rx="16" ry="12" fill="black" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <rect x="22" y="58" width="44" height="30" rx="12" transform="rotate(-32 44 73)" fill={color} />
        <rect x="134" y="58" width="44" height="30" rx="12" transform="rotate(32 156 73)" fill={color} />
        <rect x="50" y="42" width="100" height="158" rx="22" fill={color} />
      </g>
      <path d="M86 50c8 14 20 14 28 0" fill="none" stroke={ink} strokeOpacity="0.35" strokeWidth="3" />
      {print ? (
        <text
          x="100"
          y="128"
          textAnchor="middle"
          fill={ink}
          fontSize="11"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="650"
          letterSpacing="1.5"
        >
          {print}
        </text>
      ) : null}
    </svg>
  );
}
