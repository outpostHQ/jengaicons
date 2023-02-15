import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AnchorFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M17.949 8.771a2.35 2.35 0 1 0-1.955 0c-.015.069-.023.14-.023.213v3.7h-3.7a1 1 0 1 0 0 2h3.7v8.852c-.675-.611-1.586-.918-2.787-1.065-1.989-.33-3.142-.756-3.91-1.45-.753-.681-1.28-1.757-1.662-3.763a1 1 0 1 0-1.964.373c.41 2.163 1.05 3.758 2.285 4.874 1.219 1.101 2.87 1.6 4.946 1.942.014.003.028.005.043.006 1.332.162 1.716.484 1.962.877.161.258.301.617.457 1.166.097.343.187.71.292 1.136.067.273.14.57.225.9a1 1 0 0 0 1.93.027 61.04 61.04 0 0 1 .146-.503c.392-1.315.692-2.11 1.076-2.637.358-.492.831-.803 1.85-.971 2.229-.357 3.915-.904 5.139-2.028 1.234-1.134 1.848-2.718 2.27-4.774a1 1 0 1 0-1.959-.403c-.395 1.924-.898 3-1.665 3.705-.777.714-1.976 1.185-4.103 1.525l-.005.001c-1.06.175-1.897.514-2.566 1.12v-8.91h3.7a1 1 0 1 0 0-2h-3.7v-3.7c0-.073-.007-.144-.022-.213Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

AnchorFill.displayName = "AnchorFill";

export default AnchorFill;
