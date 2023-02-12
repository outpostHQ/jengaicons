import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AirplayFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 5.283a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h2.993a1 1 0 0 0 0-2H5.96v-16h22v16h-1.95a1 1 0 1 0 0 2h2.95a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-24Zm12.38 15.443a.5.5 0 0 0-.76 0l-4.913 5.732a.5.5 0 0 0 .38.825h9.826a.5.5 0 0 0 .38-.826l-4.913-5.731Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

AirplayFill.displayName = "AirplayFill";

export default AirplayFill;
