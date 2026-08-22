/**
 * Hand-inked branch that grows out of the illustrations and winds around the
 * whole page — through the outer margins and the middle gutter, never across
 * the text columns, so everything stays perfectly readable.
 *
 * Coordinate space is roughly proportional to the container (≈ 383 × 1000),
 * so leaves and blossoms keep their shape.
 */

type LeafProps = { x: number; y: number; r: number; s?: number };

function Leaf({ x, y, r, s = 1 }: LeafProps) {
  return (
    <path
      transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
      d="M0 0 C 6 -7, 16 -8, 22 -2 C 16 5, 6 6, 0 0 Z"
      fill="currentColor"
      fillOpacity={0.18}
      stroke="currentColor"
      strokeWidth={1.1}
    />
  );
}

export function PlayfulConnector() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 383 1000"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -inset-x-6 inset-y-0 h-full w-[calc(100%+3rem)] text-foreground/45 mix-blend-multiply"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* main branch: grows from the head of the figure (top right),
            down through the gutter, along the left margin and back */}
        <path
          strokeWidth={2.1}
          d="M300 40
             C 292 78, 250 92, 216 110
             C 190 124, 182 152, 191 184
             C 200 216, 186 236, 150 248
             C 96 266, 40 262, 22 298
             C 6 330, 14 366, 24 402
             C 34 440, 20 470, 16 508
             C 12 548, 34 570, 74 578
             C 130 588, 172 596, 189 622
             C 204 646, 198 672, 180 692
             C 150 726, 96 720, 60 742
             C 30 760, 20 796, 30 830"
        />
        {/* side twig reaching towards the arm that holds the child */}
        <path
          strokeWidth={1.5}
          d="M216 110 C 240 118, 258 134, 262 158"
          opacity={0.8}
        />
        <path
          strokeWidth={1.3}
          d="M191 184 C 168 190, 152 204, 148 224"
          opacity={0.75}
        />
        <path
          strokeWidth={1.3}
          d="M22 298 C 6 314, 4 336, 12 356"
          opacity={0.7}
        />
        <path
          strokeWidth={1.3}
          d="M74 578 C 62 598, 64 618, 78 634"
          opacity={0.7}
        />
        <path
          strokeWidth={1.4}
          d="M180 692 C 200 706, 214 726, 214 748"
          opacity={0.75}
        />

        {/* playful curl that ends at the hand with the yellow flower */}
        <path
          strokeWidth={1.9}
          d="M30 830
             C 40 866, 84 872, 106 892
             C 126 910, 118 940, 92 944
             C 70 948, 62 924, 82 914
             C 104 903, 132 924, 138 950"
        />
      </g>

      {/* leaves along the branch */}
      <g>
        <Leaf x={258} y={82} r={-30} s={1.1} />
        <Leaf x={200} y={140} r={40} />
        <Leaf x={262} y={158} r={10} s={0.9} />
        <Leaf x={148} y={224} r={155} s={1.05} />
        <Leaf x={92} y={266} r={200} />
        <Leaf x={22} y={330} r={95} s={0.95} />
        <Leaf x={20} y={430} r={65} s={1.1} />
        <Leaf x={16} y={520} r={110} s={0.9} />
        <Leaf x={78} y={634} r={35} />
        <Leaf x={189} y={622} r={-20} s={1.05} />
        <Leaf x={214} y={748} r={25} s={0.95} />
        <Leaf x={60} y={742} r={175} s={1.1} />
        <Leaf x={106} y={892} r={-15} s={0.9} />
      </g>

      {/* the yellow blossom the hand is holding */}
      <g transform="translate(138 950)">
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse
            key={a}
            transform={`rotate(${a}) translate(0 -11)`}
            rx={6.5}
            ry={10}
            fill="#D9A93B"
            fillOpacity={0.55}
            stroke="currentColor"
            strokeWidth={1}
          />
        ))}
        <circle r={4.5} fill="#C98A2A" fillOpacity={0.75} stroke="currentColor" strokeWidth={1} />
      </g>
    </svg>
  );
}
