import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const WarningOctagonFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="M28.667 11.035a1 1 0 0 1 .292.708l-.01 9.108a1 1 0 0 1-.294.706l-6.447 6.433a1 1 0 0 1-.708.293l-9.108-.01a1 1 0 0 1-.706-.295l-6.433-6.447a1 1 0 0 1-.293-.708l.01-9.108a1 1 0 0 1 .294-.706l6.448-6.433a1 1 0 0 1 .708-.293l9.108.01a1 1 0 0 1 .706.294l6.433 6.448ZM16.96 9.283a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1Zm1.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

WarningOctagonFill.displayName = "WarningOctagonFill";

export default WarningOctagonFill;
