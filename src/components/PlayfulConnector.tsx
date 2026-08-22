import sprigA from "@/assets/vine-sprig-a.png.asset.json";
import sprigB from "@/assets/vine-sprig-b.png.asset.json";

/**
 * The branches are cut directly out of the "Natur" painting, so they are the
 * exact same brush drawing. They grow out of the bush in the "Natur" section
 * upwards to the hand of the woman in the "Nähe" drawing.
 *
 * Geometry rules (viewBox 0 0 383 1000, matching the section grid):
 *  - text columns live at x 40-160 and x 224-345 → stems only use the left
 *    margin (x ≈ 32) and the centre gutter (x ≈ 191)
 *  - horizontal moves only happen in the gaps between sections
 *    (y ≈ 182-244, 374-436, 565-627, 763-825)
 */

const INK = "#1E3A1B";
const MID = "#3F6B2E";
const WASH = "#8FB06A";

const STEM_A =
  "M108 646 C 134 622, 176 616, 189 592 C 196 520, 187 430, 191 350 C 192 302, 186 268, 197 240 C 212 204, 246 168, 272 136";

const STEM_B =
  "M96 652 C 72 644, 44 634, 34 602 C 28 540, 37 460, 33 390 C 29 320, 31 262, 41 232 C 61 205, 130 200, 176 195 C 216 190, 251 164, 272 136";

type SprigProps = {
  /** position of the sprig centre, in % of the connector box */
  left: number;
  top: number;
  /** rendered width in % of the connector box */
  width: number;
  rotate?: number;
  flip?: boolean;
  src?: string;
  opacity?: number;
};

function Sprig({
  left,
  top,
  width,
  rotate = 0,
  flip = false,
  src = sprigA.url,
  opacity = 1,
}: SprigProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="absolute select-none"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${width}%`,
        opacity,
        transform: `translate(-50%, -50%) rotate(${rotate}deg) scaleX(${flip ? -1 : 1})`,
      }}
    />
  );
}

export function PlayfulConnector() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-10 inset-y-0"
    >
      <svg
        viewBox="0 0 383 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <g fill="none" strokeLinecap="round">
          <path d={STEM_A} stroke={WASH} strokeWidth={7} opacity={0.35} />
          <path d={STEM_B} stroke={WASH} strokeWidth={6} opacity={0.3} />
          <path d={STEM_A} stroke={MID} strokeWidth={3} />
          <path d={STEM_B} stroke={MID} strokeWidth={2.6} />
          <path d={STEM_A} stroke={INK} strokeWidth={1.1} opacity={0.5} />
          <path d={STEM_B} stroke={INK} strokeWidth={1} opacity={0.45} />
        </g>

        {/* leaf sprigs from the original painting, placed on the stems */}
      </svg>

      {/* centre gutter */}
      <Sprig left={50} top={59.5} width={6.5} rotate={8} />
      <Sprig left={50} top={43.5} width={6} rotate={186} src={sprigB.url} />
      <Sprig left={50.5} top={23} width={6.5} rotate={-14} flip />

      {/* left margin */}
      <Sprig left={8.6} top={60} width={6.5} rotate={-24} flip src={sprigB.url} />
      <Sprig left={8.6} top={40} width={6} rotate={16} />
      <Sprig left={8.6} top={22} width={6} rotate={-8} flip />

      {/* into the hand of the figure */}
      <Sprig left={64} top={17} width={7} rotate={-38} />
      <Sprig left={60} top={20} width={6} rotate={28} flip src={sprigB.url} />
      <Sprig left={50.5} top={23} width={9} rotate={-14} flip />

      {/* left margin */}
      <Sprig left={9} top={60} width={9} rotate={-24} flip src={sprigB.url} />
      <Sprig left={8.5} top={40} width={8.5} rotate={16} />
      <Sprig left={9} top={22} width={8} rotate={-8} flip />

      {/* into the hand of the figure */}
      <Sprig left={66} top={15} width={10} rotate={-38} />
      <Sprig left={62} top={19.5} width={8} rotate={28} flip src={sprigB.url} />
    </div>
  );
}
