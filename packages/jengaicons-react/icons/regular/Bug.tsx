import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Bug = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
    style: styleCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        d="M18.897 13.517a1.241 1.241 0 1 0 0-2.482 1.241 1.241 0 0 0 0 2.482ZM13.103 13.517a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M16 16v9.931M28 16H4"
      />
      <rect
        width="16.053"
        height="19.862"
        x="7.724"
        y="6.069"
        stroke={color || colorCtx || "#000000"}
        strokeWidth={weight || weightCtx || "2"}
        rx="8.027"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="m26.75 22.207-2.973-1.717M26.75 9.793l-2.973 1.717M5.25 9.793l2.741 1.583M5.25 22.207l2.53-1.461"
      />

      {children || childrenCtx}
    </svg>
  );
});

Bug.displayName = "Bug";

export default Bug;
