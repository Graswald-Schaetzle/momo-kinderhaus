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

/** Arch that crosses the page inside the gap between two sections. */
function Arch({ y, dir = 1 }: { y: number; dir?: 1 | -1 }) {
  const d =
    dir === 1
      ? `M6 ${y - 14} C 70 ${y + 10}, 150 ${y - 12}, 200 ${y + 8} C 260 ${y + 26}, 330 ${y - 6}, 377 ${y + 12}`
      : `M377 ${y - 14} C 320 ${y + 10}, 240 ${y - 12}, 190 ${y + 8} C 130 ${y + 26}, 60 ${y - 6}, 6 ${y + 12}`;
  return (
    <path d={d} fill="none" stroke={MID} strokeWidth={1.9} strokeLinecap="round" />
  );
}

export function PlayfulConnector() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 383 1000"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -inset-x-10 inset-y-0 h-full w-[calc(100%+5rem)] opacity-90"
    >
      <g fill="none" strokeLinecap="round">
        {/* left margin vine */}
        <path
          d="M8 40 C 2 130, 12 200, 6 292 C 1 384, 12 450, 7 545 C 3 640, 13 710, 8 800 C 4 880, 11 930, 7 990"
          stroke={MID}
          strokeWidth={2.2}
        />
        <path
          d="M8 40 C 14 130, 4 200, 10 292"
          stroke={DARK}
          strokeWidth={0.9}
          opacity={0.5}
        />
        {/* right margin vine */}
        <path
          d="M375 90 C 381 180, 371 250, 377 342 C 382 434, 371 500, 376 595 C 380 690, 370 760, 375 850 C 379 920, 372 960, 376 998"
          stroke={MID}
          strokeWidth={2.2}
        />

        {/* arches through the gaps between the sections */}
        <Arch y={200} dir={1} />
        <Arch y={400} dir={-1} />
        <Arch y={600} dir={1} />
        <Arch y={800} dir={-1} />
      </g>

      {/* sprigs on the margins */}
      <Sprig x={7} y={180} rotate={12} scale={0.75} color={LIGHT} />
      <Sprig x={7} y={330} rotate={-8} scale={0.8} flip />
      <Sprig x={8} y={500} rotate={10} scale={0.75} />
      <Sprig x={8} y={700} rotate={-6} scale={0.8} flip color={LIGHT} />
      <Sprig x={7} y={900} rotate={8} scale={0.7} />

      <Sprig x={376} y={240} rotate={-12} scale={0.75} flip />
      <Sprig x={375} y={430} rotate={8} scale={0.8} color={LIGHT} />
      <Sprig x={375} y={640} rotate={-10} scale={0.75} flip />
      <Sprig x={376} y={880} rotate={6} scale={0.7} />

      {/* sprigs riding on the arches */}
      <Sprig x={150} y={196} rotate={-14} scale={0.6} />
      <Sprig x={240} y={418} rotate={12} scale={0.6} flip color={LIGHT} />
      <Sprig x={140} y={600} rotate={-10} scale={0.6} />
      <Sprig x={250} y={818} rotate={14} scale={0.6} flip />

      {/* blossoms, echoing the yellow flower in the hand */}
      <Blossom x={200} y={208} scale={0.7} rotate={12} />
      <Blossom x={7} y={620} scale={0.6} rotate={-18} />
      <Blossom x={376} y={545} scale={0.65} rotate={24} />
      <Blossom x={190} y={808} scale={0.7} rotate={-10} />
    </svg>
  );
}
