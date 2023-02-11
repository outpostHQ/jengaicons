import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WifiNoneFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M16.96 17.682a1.4 1.4 0 1 0 0-2.798 1.4 1.4 0 0 0 0 2.798Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

WifiNoneFill.displayName = "WifiNoneFill";

export default WifiNoneFill;
