import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BugRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M18.897 13.517a1.241 1.241 0 1 0 0-2.482 1.241 1.241 0 0 0 0 2.482ZM13.103 13.517a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483Z"
        fill={color || colorCtx || "#000000"}
      />
      <path
        d="M16 16v9.931M28 16H4"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="7.724"
        y="6.069"
        width="16.053"
        height="19.862"
        rx="8.027"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
      />
      <path
        d="m26.75 22.207-2.973-1.717M26.75 9.793l-2.973 1.717M5.25 9.793l2.741 1.583M5.25 22.207l2.53-1.461"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {children || childrenCtx}
    </svg>
  );
});

BugRegular.displayName = "BugRegular";

export default BugRegular;
