import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FinnTheHumanRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M11.846 18.77a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77ZM20.154 18.77a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28 15.692V6.308h-5.562v2.814H9.492V6.308H4v9.384c0 5.523 4.477 10 10 10h4c5.523 0 10-4.477 10-10Z"
        />
        <rect
          width="16.615"
          height="8.308"
          x="7.692"
          y="13.231"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          rx="4.154"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FinnTheHumanRegular.displayName = "FinnTheHumanRegular";

export default FinnTheHumanRegular;
