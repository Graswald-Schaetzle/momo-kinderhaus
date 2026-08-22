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
 * One continuous painted branch that starts at the head of the figure in the
 * "Nähe" drawing, meanders through the gaps between the sections and the outer
 * margins — never across a text column or a film — and climbs out at the top
 * right again.
 */
const STEM =
  "M300 52 C 293 108, 302 152, 252 186 C 212 214, 120 188, 62 214 C 22 232, 10 302, 15 380 C 19 430, 62 400, 122 409 C 202 420, 300 391, 340 420 C 372 443, 373 520, 366 590 C 359 652, 300 618, 240 628 C 182 637, 140 608, 96 626 C 58 642, 38 700, 60 760 C 82 814, 150 788, 202 800 C 262 813, 330 784, 358 812 C 383 836, 378 920, 372 988";

const STEM_ECHO =
  "M300 52 C 297 110, 308 154, 256 192 C 214 222, 122 196, 66 220 C 28 238, 16 304, 21 378";

export function PlayfulConnector() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 383 1000"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -inset-x-10 inset-y-0 h-full w-[calc(100%+5rem)] opacity-90"
    >
      <g fill="none" strokeLinecap="round">
        <path d={STEM} stroke={DARK} strokeWidth={3.4} opacity={0.35} />
        <path d={STEM} stroke={MID} strokeWidth={2.2} />
        <path d={STEM_ECHO} stroke={LIGHT} strokeWidth={1} opacity={0.7} />
      </g>

      {/* leaves growing off the branch */}
      <Sprig x={296} y={96} rotate={166} scale={0.7} color={LIGHT} />
      <Sprig x={252} y={186} rotate={-104} scale={0.7} flip />
      <Sprig x={150} y={196} rotate={-14} scale={0.62} />
      <Sprig x={62} y={214} rotate={26} scale={0.7} color={LIGHT} />
      <Sprig x={15} y={330} rotate={12} scale={0.75} flip />
      <Sprig x={122} y={409} rotate={-16} scale={0.62} />
      <Sprig x={252} y={404} rotate={14} scale={0.6} flip color={LIGHT} />
      <Sprig x={366} y={520} rotate={-12} scale={0.75} flip />
      <Sprig x={300} y={618} rotate={16} scale={0.6} />
      <Sprig x={140} y={610} rotate={-12} scale={0.62} color={LIGHT} />
      <Sprig x={48} y={706} rotate={22} scale={0.72} flip />
      <Sprig x={150} y={788} rotate={-14} scale={0.6} />
      <Sprig x={300} y={792} rotate={12} scale={0.6} flip color={LIGHT} />
      <Sprig x={374} y={900} rotate={-8} scale={0.7} flip />

      {/* blossoms, echoing the yellow flower in the hand */}
      <Blossom x={202} y={200} scale={0.7} rotate={12} />
      <Blossom x={340} y={420} scale={0.6} rotate={-16} />
      <Blossom x={96} y={626} scale={0.68} rotate={22} />
      <Blossom x={202} y={800} scale={0.62} rotate={-10} />
    </svg>
  );
}

