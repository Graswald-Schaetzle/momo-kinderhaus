/**
 * Hand-painted green branches in the exact style of the "Natur" illustration.
 * They grow out of the paintings and wind up and around the page — strictly
 * inside the outer margins and the middle gutter, so they never cross the
 * texts or the films.
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

/** One painted twig with pointed brush leaves, same shape language as the artwork. */
function Sprig({ x, y, rotate = 0, scale = 1, flip = false, color = MID }: SprigProps) {
  const leaves = [
    { t: 6, a: -42 },
    { t: 14, a: 46 },
    { t: 24, a: -38 },
    { t: 33, a: 44 },
    { t: 42, a: -34 },
  ];
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${flip ? -scale : scale} ${scale})`}
    >
      <path
        d="M0 0 C 3 -14, -2 -28, 1 -44 C 2 -50, 1 -52, 0 -56"
        fill="none"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
      />
      {leaves.map((l, i) => (
        <path
          key={i}
          transform={`translate(${i % 2 ? 1.5 : -0.5} ${-l.t}) rotate(${l.a})`}
          d="M0 0 C 5 -3, 12 -3, 17 0 C 12 3.5, 5 3.5, 0 0 Z"
          fill={i % 2 ? color : DARK}
          stroke={DARK}
          strokeWidth={0.8}
          strokeLinejoin="round"
        />
      ))}
      {/* tip leaf */}
      <path
        transform="translate(0 -56) rotate(-90)"
        d="M0 0 C 4 -3, 11 -3, 15 0 C 11 3, 4 3, 0 0 Z"
        fill={LIGHT}
        stroke={DARK}
        strokeWidth={0.8}
      />
    </g>
  );
}

/** Pale-yellow blossom with the dark brush outline of the artwork. */
function Blossom({ x, y, scale = 1, rotate = 0 }: { x: number; y: number; scale?: number; rotate?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <path
          key={a}
          transform={`rotate(${a})`}
          d="M0 0 C -5 -8, -4 -17, 0 -22 C 4 -17, 5 -8, 0 0 Z"
          fill="#E8E3A8"
          stroke="#1F1B16"
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
      ))}
      <circle r={4} fill="#E8E3A8" stroke="#1F1B16" strokeWidth={1.4} />
    </g>
  );
}

export function PlayfulConnector() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 383 1000"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -inset-x-8 inset-y-0 h-full w-[calc(100%+4rem)]"
    >
      {/* ── centre gutter vine ───────────────────────────────────────── */}
      <g fill="none" strokeLinecap="round">
        <path
          d="M192 8 C 186 90, 197 150, 191 220 C 185 292, 196 350, 190 430
             C 184 508, 196 560, 191 640 C 186 720, 195 780, 191 860 C 188 920, 193 960, 191 992"
          stroke={MID}
          strokeWidth={3.4}
        />
        <path
          d="M192 8 C 198 90, 187 150, 193 220 C 199 292, 188 350, 194 430"
          stroke={DARK}
          strokeWidth={1.4}
          opacity={0.6}
        />
        {/* left margin vine */}
        <path
          d="M4 120 C 10 210, 2 280, 8 370 C 14 460, 3 520, 9 610 C 15 700, 4 760, 8 860"
          stroke={MID}
          strokeWidth={3}
        />
        {/* right margin vine */}
        <path
          d="M379 200 C 373 290, 381 350, 375 440 C 369 530, 380 590, 374 680 C 368 770, 379 830, 375 930"
          stroke={MID}
          strokeWidth={3}
        />
      </g>

      {/* ── sprigs along the centre gutter ───────────────────────────── */}
      <Sprig x={191} y={120} rotate={-6} scale={0.85} />
      <Sprig x={193} y={250} rotate={8} scale={0.95} flip color={LIGHT} />
      <Sprig x={190} y={380} rotate={-10} scale={0.9} />
      <Sprig x={192} y={520} rotate={6} scale={1} flip />
      <Sprig x={191} y={660} rotate={-8} scale={0.9} color={LIGHT} />
      <Sprig x={193} y={800} rotate={10} scale={0.95} flip />
      <Sprig x={191} y={940} rotate={-6} scale={0.85} />

      {/* ── sprigs along the outer margins ───────────────────────────── */}
      <Sprig x={7} y={230} rotate={12} scale={0.8} color={LIGHT} />
      <Sprig x={7} y={430} rotate={-8} scale={0.9} flip />
      <Sprig x={8} y={660} rotate={10} scale={0.85} />
      <Sprig x={8} y={880} rotate={-6} scale={0.8} flip color={LIGHT} />

      <Sprig x={376} y={300} rotate={-12} scale={0.85} flip />
      <Sprig x={375} y={520} rotate={8} scale={0.9} color={LIGHT} />
      <Sprig x={375} y={740} rotate={-10} scale={0.85} flip />
      <Sprig x={376} y={950} rotate={6} scale={0.8} />

      {/* ── blossoms, echoing the yellow flower in the hand ──────────── */}
      <Blossom x={191} y={330} scale={0.8} rotate={12} />
      <Blossom x={8} y={545} scale={0.7} rotate={-18} />
      <Blossom x={375} y={640} scale={0.75} rotate={24} />
      <Blossom x={192} y={905} scale={0.85} rotate={-10} />
    </svg>
  );
}
