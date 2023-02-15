import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BatteryChargingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M4.96 9.428a1 1 0 0 1 1-1h18.073a1 1 0 0 1 1 1v13.71a1 1 0 0 1-1 1H5.96a1 1 0 0 1-1-1V9.427Zm10.492 1.451a1 1 0 0 1 .554 1.301l-1.226 3.047h2.023a1 1 0 0 1 .933 1.36l-1.725 4.474a1 1 0 0 1-1.866-.72l1.2-3.114H13.3a1 1 0 0 1-.927-1.373l1.778-4.42a1 1 0 0 1 1.302-.555Zm14.508 1.913a1 1 0 0 0-2 0v6.982a1 1 0 1 0 2 0v-6.982Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BatteryChargingFill.displayName = "BatteryChargingFill";

export default BatteryChargingFill;
