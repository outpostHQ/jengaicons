import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlugsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M25.924 8.751a.951.951 0 0 0 .015-.015l3.728-3.728a1 1 0 1 0-1.414-1.414l-3.728 3.728-.015.015-.776-.775a2 2 0 0 0-2.828 0L17.717 9.75l-.83-.83a1 1 0 0 0-1.415 1.413l7.455 7.456a1 1 0 1 0 1.415-1.415l-.723-.722 3.189-3.189a2 2 0 0 0 0-2.828l-.884-.884ZM15.785 15.66a1 1 0 0 0-1.414-1.414L12.415 16.2l-1.423-1.423a1 1 0 0 0-1.414 1.414l.83.83-3.188 3.19a2 2 0 0 0 0 2.828l.776.776-.015.015-3.728 3.728a1 1 0 1 0 1.414 1.414l3.728-3.728.015-.015.884.883a2 2 0 0 0 2.828 0l3.189-3.188.723.723a1 1 0 0 0 1.414-1.415l-1.423-1.423 1.955-1.955a1 1 0 0 0-1.414-1.414l-1.956 1.955-1.78-1.78 1.955-1.956Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

PlugsFill.displayName = "PlugsFill";

export default PlugsFill;
