import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CoatHangerFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
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
          strokeWidth="2"
          d="m17.161 14.476 10.597 7.937a.5.5 0 0 1-.3.9H6.502a.5.5 0 0 1-.294-.904L20.044 12.37a.463.463 0 0 0 .174-.532c-.379-1.032-1.366-2.607-3.057-2.585-2.355.031-2.852 1.731-3.038 2.914"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CoatHangerFill.displayName = "CoatHangerFill";

export default CoatHangerFill;
