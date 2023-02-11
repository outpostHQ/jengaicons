import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MediumLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M10.96 22.853c3.314 0 6-2.878 6-6.429 0-3.55-2.686-6.428-6-6.428s-6 2.878-6 6.428 2.686 6.429 6 6.429ZM22.96 22.424c1.42 0 2.572-2.686 2.572-6 0-3.313-1.152-6-2.572-6-1.42 0-2.571 2.687-2.571 6 0 3.314 1.15 6 2.571 6Z"
          fill="#1C1B1F"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.96 10.424v12"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

MediumLogosvgFill.displayName = "MediumLogosvgFill";

export default MediumLogosvgFill;
