import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WifiLowFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M13.562 15.648a4.92 4.92 0 0 1 6.796 0A1 1 0 1 0 21.74 14.2a6.92 6.92 0 0 0-9.56 0 1 1 0 1 0 1.382 1.447Zm4.798 3.233a1.4 1.4 0 1 1-2.798 0 1.4 1.4 0 0 1 2.798 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

WifiLowFill.displayName = "WifiLowFill";

export default WifiLowFill;
