import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HardDrivesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.09 11.091a1.636 1.636 0 1 0 0-3.273 1.636 1.636 0 0 0 0 3.273ZM23.09 24.182a1.636 1.636 0 1 0 .001-3.273 1.636 1.636 0 0 0 0 3.273Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M4 5.09h24v8.728H4V5.091ZM4 18.182h24v8.727H4v-8.727Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HardDrivesRegular.displayName = "HardDrivesRegular";

export default HardDrivesRegular;
