import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BatteryFullFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.96 8.428a1 1 0 0 0-1 1v13.71a1 1 0 0 0 1 1h18.073a1 1 0 0 0 1-1V9.427a1 1 0 0 0-1-1H5.96Zm12 2.855a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-10Zm-5-1a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0v-10a1 1 0 0 1 1-1Zm-3 1a1 1 0 1 0-2 0v10a1 1 0 0 0 2 0v-10Zm11-1a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0v-10a1 1 0 0 1 1-1Zm9 2.509a1 1 0 0 0-2 0v6.982a1 1 0 1 0 2 0v-6.982Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BatteryFullFill.displayName = "BatteryFullFill";

export default BatteryFullFill;
