import simbolo from "@/assets/simbolo.svg.asset.json";

type Corner = "tr" | "bl" | "br" | "tl";

const positions: Record<Corner, string> = {
  tr: "-top-1/4 -right-16",
  tl: "-top-1/4 -left-16",
  br: "-bottom-1/4 -right-16",
  bl: "-bottom-1/4 -left-16",
};

/** Discreet, half-cropped brand symbol used inside dark containers. */
export function BrandMark({
  corner = "tr",
  className = "",
}: {
  corner?: Corner;
  className?: string;
}) {
  return (
    <img
      src={simbolo.url}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute w-40 select-none opacity-[0.07] sm:w-56 ${positions[corner]} ${className}`}
    />
  );
}
