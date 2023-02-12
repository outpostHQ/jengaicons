import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HardDrivesFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 6.374a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1V13.1a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1V6.374Zm19.09 5a1.636 1.636 0 1 0 .001-3.273 1.636 1.636 0 0 0 0 3.273Zm-19.09 8.09a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v6.728a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-6.727Zm19.09 5a1.636 1.636 0 1 0 .001-3.272 1.636 1.636 0 0 0 0 3.273Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HardDrivesFill.displayName = "HardDrivesFill";

export default HardDrivesFill;
