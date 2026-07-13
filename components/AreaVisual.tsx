"use client";

// Deterministically generates a unique, on-brand visual per area — used for
// every venue area that doesn't have a genuine confirmed photo, so no two
// area cards in the Venues section ever show the same image. The seed
// (area.id) is unique per area, so the palette/pattern/angle/monogram
// combination it produces is unique too.

function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

const PALETTES: [string, string][] = [
  ["#1F3329", "#2F4A3C"],
  ["#8F6E43", "#D4B483"],
  ["#D9B8B0", "#8F6E43"],
  ["#142720", "#B8935F"],
  ["#2F4A3C", "#D4B483"],
  ["#1F3329", "#B8935F"],
  ["#8F6E43", "#142720"],
  ["#2F4A3C", "#D9B8B0"],
];

type Pattern = "dots" | "lines" | "waves" | "grid" | "rings" | "chevron";
const PATTERNS: Pattern[] = ["dots", "lines", "waves", "grid", "rings", "chevron"];

function getInitials(label: string): string {
  const clean = label.replace(/\(.*?\)/g, "").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export default function AreaVisual({
  seed,
  label,
}: {
  seed: string;
  label: string;
}) {
  const h = hashString(seed);
  const [c1, c2] = PALETTES[h % PALETTES.length];
  const pattern = PATTERNS[Math.floor(h / PALETTES.length) % PATTERNS.length];
  const angle = h % 360;
  const patternAngle = (h * 7) % 90;
  const initials = getInitials(label);
  const uid = seed.replace(/[^a-z0-9]/gi, "");

  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient
          id={`grad-${uid}`}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="400"
          y2="300"
          gradientTransform={`rotate(${angle} 200 150)`}
        >
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
        <pattern
          id={`pat-${uid}`}
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
          patternTransform={`rotate(${patternAngle})`}
        >
          {pattern === "dots" && (
            <circle cx="5" cy="5" r="1.8" fill="#FAF6EF" fillOpacity="0.28" />
          )}
          {pattern === "lines" && (
            <rect x="0" y="0" width="30" height="2" fill="#FAF6EF" fillOpacity="0.16" />
          )}
          {pattern === "waves" && (
            <path
              d="M0 15 Q 7.5 5, 15 15 T 30 15"
              stroke="#FAF6EF"
              strokeOpacity="0.22"
              fill="none"
              strokeWidth="1.5"
            />
          )}
          {pattern === "grid" && (
            <path d="M30 0 L0 0 0 30" stroke="#FAF6EF" strokeOpacity="0.16" fill="none" />
          )}
          {pattern === "rings" && (
            <circle cx="15" cy="15" r="9" stroke="#FAF6EF" strokeOpacity="0.22" fill="none" />
          )}
          {pattern === "chevron" && (
            <path
              d="M0 10 L7.5 0 L15 10 M15 20 L22.5 10 L30 20"
              stroke="#FAF6EF"
              strokeOpacity="0.2"
              fill="none"
              strokeWidth="1.3"
            />
          )}
        </pattern>
      </defs>
      <rect width="400" height="300" fill={`url(#grad-${uid})`} />
      <rect width="400" height="300" fill={`url(#pat-${uid})`} />
      <text
        x="200"
        y="185"
        textAnchor="middle"
        fontFamily="Georgia, 'Cormorant Garamond', serif"
        fontStyle="italic"
        fontSize="104"
        fill="#FAF6EF"
        fillOpacity="0.24"
      >
        {initials}
      </text>
    </svg>
  );
}
