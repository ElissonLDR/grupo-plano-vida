import simbolo from "@/assets/simbolo-plano-vida.svg";

type Corner = "tr" | "bl" | "br" | "tl" | "left" | "right";

/** Positions crop ~50% of the symbol off the edge. */
const positions: Record<Corner, string> = {
  tr: "top-0 right-0 translate-x-1/2 -translate-y-1/4",
  tl: "top-0 left-0 -translate-x-1/2 -translate-y-1/4",
  br: "bottom-0 right-0 translate-x-1/2 translate-y-1/4",
  bl: "bottom-0 left-0 -translate-x-1/2 translate-y-1/4",
  left: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  right: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
};

/** Discreet, half-cropped brand symbol for section corners/sides. */
export function BrandMark({
  corner = "tr",
  className = "",
}: {
  corner?: Corner;
  className?: string;
}) {
  return (
    <img
      src={simbolo}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 w-48 select-none opacity-[0.08] sm:w-64 lg:w-72 ${positions[corner]} ${className}`}
    />
  );
}
