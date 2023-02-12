import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DiceTwoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          d="M13.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
          d="M4 4h24v24H4z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DiceTwoRegular.displayName = "DiceTwoRegular";

export default DiceTwoRegular;
