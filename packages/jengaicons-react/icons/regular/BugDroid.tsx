import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const BugDroid = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M28 16.592H4"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M19.5 13.592a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12.5 13.592a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m6.663 5.477 3.803 3M25.48 5.477l-3.802 3"
        />
        <rect
          width="16.053"
          height="19.862"
          x="7.973"
          y="6.661"
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          rx="8.027"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BugDroid.displayName = "BugDroid";

export default BugDroid;
