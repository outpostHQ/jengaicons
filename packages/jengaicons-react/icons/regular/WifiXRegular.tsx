import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const WifiXRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        d="M12.186 19.868a6.125 6.125 0 0 1 8.463 0M28 6.59l-5.79 5.79M28 12.38l-5.79-5.79M4 11.679A17.602 17.602 0 0 1 16.418 6.59c.645 0 1.29.035 1.932.104M8.092 15.773a11.837 11.837 0 0 1 8.325-3.392c.648 0 1.295.052 1.934.156"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.418 25.41a1.448 1.448 0 1 0 0-2.895 1.448 1.448 0 0 0 0 2.895Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

WifiXRegular.displayName = "WifiXRegular";

export default WifiXRegular;
