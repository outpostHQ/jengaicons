import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const TrainSimple = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
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
          d="M6.308 15.077h19.384M12.308 24.308 9.538 28M19.692 24.308 22.462 28"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M10.923 21.538a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77ZM21.077 21.538a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M6.308 4h19.385v20.308H6.308z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TrainSimple.displayName = "TrainSimple";

export default TrainSimple;
