/**
 * Hand-drawn ink line that playfully connects the illustrations
 * across the whole page — same brush/ink look as the paintings.
 */
export function PlayfulConnector() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full text-foreground/45 mix-blend-multiply"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* main flowing line: Nähe → Ruhe → Ganzheitlichkeit → Natur → Eigenständigkeit */}
        <path d="M76 96 C 74 150, 40 150, 34 178 C 26 214, 60 224, 68 254 C 76 288, 20 280, 16 316 C 12 352, 62 344, 66 380 C 70 420, 24 418, 22 456 C 20 496, 66 492, 70 534 C 74 576, 26 566, 22 606 C 18 648, 70 640, 74 686 C 78 730, 30 726, 28 766 C 26 806, 72 800, 74 842" />
        {/* playful loop at the bottom */}
        <path d="M74 842 C 76 884, 34 878, 30 906 C 26 934, 62 942, 70 926 C 78 910, 40 900, 26 922 C 12 944, 38 968, 66 962" />
        {/* small secondary flourish */}
        <path
          strokeWidth={1.4}
          d="M40 214 C 52 226, 58 240, 54 258"
          opacity={0.7}
        />
      </g>
    </svg>
  );
}
