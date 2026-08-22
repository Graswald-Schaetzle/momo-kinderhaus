/**
 * Hand-painted green branches in the style of the "Natur" illustration.
 * They climb the outer margins and arch across the page only in the gaps
 * between the sections — never across the texts or the films.
 */

const DARK = "#2E5228";
const MID = "#4F7A38";
const LIGHT = "#7BA055";

type SprigProps = {
  x: number;
  y: number;
  rotate?: number;
  scale?: number;
  flip?: boolean;
  color?: string;
};

/** One painted twig with pointed brush leaves. */
function Sprig({ x, y, rotate = 0, scale = 1, flip = false, color = MID }: SprigProps) {
  const leaves = [6, 15, 25, 34];
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${flip ? -scale : scale} ${scale})`}
    >
      <path
        d="M0 0 C 3 -12, -2 -24, 1 -38"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      {leaves.map((t, i) => (
        <path
          key={t}
          transform={`translate(${i % 2 ? 1 : -0.5} ${-t}) rotate(${i % 2 ? 44 : -40})`}
          d="M0 0 C 4 -2.4, 9.5 -2.4, 13 0 C 9.5 2.8, 4 2.8, 0 0 Z"
          fill={i % 2 ? color : DARK}
          stroke={DARK}
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
      ))}
      <path
        transform="translate(1 -38) rotate(-90)"
        d="M0 0 C 3 -2, 8 -2, 11 0 C 8 2.4, 3 2.4, 0 0 Z"
        fill={LIGHT}
        stroke={DARK}
        strokeWidth={0.6}
      />
    </g>
  );
}

/** Pale-yellow blossom with the dark brush outline of the artwork. */
function Blossom({
  x,
  y,
  scale = 1,
  rotate = 0,
}: {
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <path
          key={a}
          transform={`rotate(${a})`}
          d="M0 0 C -4 -7, -3.5 -15, 0 -19 C 3.5 -15, 4 -7, 0 0 Z"
          fill="#E8E3A8"
          stroke="#1F1B16"
          strokeWidth={1.3}
          strokeLinejoin="round"
        />
      ))}
      <circle r={3.2} fill="#E8E3A8" stroke="#1F1B16" strokeWidth={1.2} />
    </g>
  );
}

/**
 * Two painted branches that grow out of the "Natur" bush drawing (left column)
 * and climb upwards through the gutter and the left margin until they reach the
 * hand of the woman who holds the child in the "Nähe" drawing — she holds both
 * of them. They stay in the gaps and margins, never across text or films.
 */
const STEM_A =
  "M104 686 C 116 638, 150 620, 176 598 C 192 556, 184 500, 190 452 C 196 408, 200 376, 194 336 C 188 282, 228 232, 266 192 C 284 172, 296 154, 301 140";

const STEM_B =
  "M92 682 C 70 644, 40 628, 24 596 C 8 560, 14 500, 17 452 C 20 380, 10 300, 16 238 C 22 208, 62 196, 122 200 C 192 204, 252 180, 282 152 C 292 144, 297 141, 301 140";

export function PlayfulConnector() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 383 1000"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -inset-x-10 inset-y-0 h-full w-[calc(100%+5rem)] opacity-90"
    >
      <g fill="none" strokeLinecap="round">
        <path d={STEM_A} stroke={DARK} strokeWidth={3.4} opacity={0.32} />
        <path d={STEM_B} stroke={DARK} strokeWidth={3.2} opacity={0.28} />
        <path d={STEM_A} stroke={MID} strokeWidth={2.2} />
        <path d={STEM_B} stroke={MID} strokeWidth={1.9} />
      </g>

      {/* leaves growing along the two stems */}
      <Sprig x={176} y={598} rotate={-14} scale={0.62} />
      <Sprig x={188} y={520} rotate={10} scale={0.6} flip color={LIGHT} />
      <Sprig x={191} y={430} rotate={-12} scale={0.62} />
      <Sprig x={196} y={352} rotate={12} scale={0.6} flip />
      <Sprig x={232} y={232} rotate={-26} scale={0.62} color={LIGHT} />
      <Sprig x={280} y={172} rotate={-40} scale={0.55} flip />

      <Sprig x={40} y={628} rotate={22} scale={0.68} flip />
      <Sprig x={17} y={520} rotate={-10} scale={0.7} />
      <Sprig x={15} y={400} rotate={12} scale={0.7} flip color={LIGHT} />
      <Sprig x={16} y={280} rotate={-8} scale={0.65} />
      <Sprig x={80} y={198} rotate={16} scale={0.58} flip />
      <Sprig x={170} y={200} rotate={-14} scale={0.58} color={LIGHT} />

      {/* blossoms, echoing the yellow flower in the hand */}
      <Blossom x={192} y={476} scale={0.6} rotate={14} />
      <Blossom x={20} y={344} scale={0.58} rotate={-18} />
      <Blossom x={126} y={202} scale={0.62} rotate={10} />
    </svg>

  );
}

