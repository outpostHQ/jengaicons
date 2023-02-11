import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const InfinityFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M14.462 19.014a5.143 5.143 0 1 1-4.359-7.874c1.044 0 2.425.528 3.058 1.089.623.55 6.903 7.52 7.115 7.756l.016.017.254.25a5.143 5.143 0 1 0-.725-7.206"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
});

InfinityFill.displayName = "InfinityFill";

export default InfinityFill;
