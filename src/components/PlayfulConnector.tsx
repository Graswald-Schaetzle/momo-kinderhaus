/**
 * Painted branches in the exact brush style of the "Natur" illustration:
 * soft green washes underneath, a dark ink stem and pointed leaves that sit in
 * opposite pairs along the stem.
 *
 * Two branches grow out of the "Natur" bush (left column, lower third) and
 * climb upwards — strictly inside the outer margin and the centre gutter, so
 * they never cross a text column or a film — until they reach the hand of the
 * woman holding the child in the "Nähe" drawing.
 */

const INK = "#1E3A1B";
const MID = "#3F6B2E";
const LEAF = "#5C8B3C";
const WASH = "#8FB06A";

/** Single pointed brush leaf, drawn from its base outwards. */
function Leaf({
  x,
  y,
  rotate,
  len = 15,
  color = MID,
}: {
  x: number;
  y: number;
  rotate: number;
  len?: number;
  color?: string;
}) {
  const w = len * 0.34;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <path
        d={`M0 0 C ${len * 0.35} ${-w}, ${len * 0.8} ${-w * 0.9}, ${len} 0 C ${len * 0.8} ${w * 0.9}, ${len * 0.35} ${w}, 0 0 Z`}
        fill={color}
        stroke={INK}
        strokeWidth={0.5}
        strokeLinejoin="round"
      />
    </g>
  );
}

/** A twig with opposite leaf pairs, like the branches in the artwork. */
function Twig({
  x,
  y,
  rotate = 0,
  scale = 1,
  pairs = 3,
}: {
  x: number;
  y: number;
  rotate?: number;
  scale?: number;
  pairs?: number;
}) {
  const steps = Array.from({ length: pairs }, (_, i) => 9 + i * 8);
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d={`M0 0 C 4 -8, 2 -16, 5 -${9 + pairs * 8}`}
        fill="none"
        stroke={INK}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      {steps.map((t, i) => (
        <g key={t}>
          <Leaf
            x={i * 0.6}
            y={-t}
            rotate={-38 - i * 4}
            len={13 - i * 1.6}
            color={i % 2 ? LEAF : MID}
          />
          <Leaf
            x={i * 0.6}
            y={-t}
            rotate={140 + i * 4}
            len={12 - i * 1.5}
            color={i % 2 ? MID : LEAF}
          />
        </g>
      ))}
      <Leaf x={5} y={-(9 + pairs * 8)} rotate={-88} len={11} color={LEAF} />
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
      {[0, 51, 103, 154, 206, 257, 308].map((a) => (
        <path
          key={a}
          transform={`rotate(${a})`}
          d="M0 0 C -5 -8, -4 -16, 0 -20 C 4 -16, 5 -8, 0 0 Z"
          fill="#EEE9A8"
          stroke="#211C15"
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
      ))}
    </g>
  );
}

/* Both stems stay in the left margin / centre gutter and meet in the hand of
   the woman in the "Nähe" drawing at (299, 140). */
const STEM_A =
  "M104 686 C 118 640, 152 622, 180 598 C 194 556, 186 500, 190 452 C 195 408, 199 376, 193 336 C 187 282, 228 232, 264 194 C 282 174, 294 156, 299 141";

const STEM_B =
  "M92 682 C 68 646, 34 630, 16 598 C 2 562, 6 500, 8 452 C 10 380, 2 300, 8 236 C 13 206, 58 192, 120 196 C 192 200, 252 178, 282 152 C 291 144, 296 142, 299 141";

export function PlayfulConnector() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 383 1000"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -inset-x-10 inset-y-0 h-full w-[calc(100%+5rem)]"
    >
      <g fill="none" strokeLinecap="round">
        {/* soft watercolour wash under the ink line */}
        <path d={STEM_A} stroke={WASH} strokeWidth={6} opacity={0.35} />
        <path d={STEM_B} stroke={WASH} strokeWidth={5.5} opacity={0.3} />
        {/* the painted stems */}
        <path d={STEM_A} stroke={MID} strokeWidth={2.6} />
        <path d={STEM_B} stroke={MID} strokeWidth={2.3} />
        <path d={STEM_A} stroke={INK} strokeWidth={1} opacity={0.55} />
        <path d={STEM_B} stroke={INK} strokeWidth={0.9} opacity={0.5} />
      </g>

      {/* leaf twigs along stem A (centre gutter) */}
      <Twig x={181} y={596} rotate={-8} scale={0.55} pairs={3} />
      <Twig x={188} y={520} rotate={168} scale={0.5} pairs={2} />
      <Twig x={191} y={438} rotate={-10} scale={0.55} pairs={3} />
      <Twig x={196} y={352} rotate={172} scale={0.5} pairs={2} />
      <Twig x={230} y={234} rotate={-38} scale={0.5} pairs={2} />
      <Twig x={276} y={176} rotate={-58} scale={0.45} pairs={2} />

      {/* leaf twigs along stem B (left margin) */}
      <Twig x={34} y={630} rotate={26} scale={0.55} pairs={3} />
      <Twig x={9} y={540} rotate={-14} scale={0.55} pairs={2} />
      <Twig x={7} y={430} rotate={16} scale={0.6} pairs={3} />
      <Twig x={6} y={300} rotate={-12} scale={0.55} pairs={2} />
      <Twig x={74} y={194} rotate={14} scale={0.5} pairs={2} />
      <Twig x={168} y={196} rotate={-16} scale={0.5} pairs={2} />

      {/* blossoms, echoing the yellow flower in the hand */}
      <Blossom x={193} y={480} scale={0.5} rotate={14} />
      <Blossom x={8} y={366} scale={0.48} rotate={-18} />
      <Blossom x={124} y={198} scale={0.5} rotate={8} />
    </svg>
  );
}
