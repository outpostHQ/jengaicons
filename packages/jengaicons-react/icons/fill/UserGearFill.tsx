import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UserGearFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color } = props;

  return (
    <svg
      style={{ width: size || 32, height: size || 32 }}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={color || "#000000"}
        fillRule="evenodd"
        d="M20.1 12.455c0 3.572-2.89 6.47-6.46 6.482a8.658 8.658 0 0 1 8.577 7.658c.063.549-.39.999-.943.999H5.96c-.552 0-1.006-.45-.943-.999a8.658 8.658 0 0 1 8.577-7.658 6.482 6.482 0 1 1 6.505-6.482Zm7.13.828a1 1 0 1 0-2 0v.67a2.995 2.995 0 0 0-.95.55l-.582-.336a1 1 0 0 0-1 1.732l.581.336a3.021 3.021 0 0 0 0 1.096l-.581.336a1 1 0 0 0 1 1.732l.581-.336c.278.238.599.425.95.55v.67a1 1 0 0 0 2 0v-.67c.351-.125.672-.313.95-.55l.581.336a1 1 0 0 0 1-1.732l-.581-.336a3.021 3.021 0 0 0 0-1.096l.581-.336a1 1 0 1 0-1-1.732l-.581.336a2.997 2.997 0 0 0-.95-.55v-.67Zm-1.001 2.5a1 1 0 0 1 .86.49l.006.01.006.01a.995.995 0 0 1 0 .98l-.006.01-.005.01a1 1 0 0 1-1.72 0l-.007-.01-.007-.012a.996.996 0 0 1 0-.976l.007-.012.006-.011a1 1 0 0 1 .86-.489Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

UserGearFill.displayName = "UserGearFill";

export default UserGearFill;
