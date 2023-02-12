import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NyTimesLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M22.568 20.253a1.532 1.532 0 1 0 0-3.064 1.532 1.532 0 0 0 0 3.064Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M26.862 20.681A10.213 10.213 0 1 1 16.952 8"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.205 11.556a3.574 3.574 0 0 1 .352-7.132l14.807 7.149a3.574 3.574 0 1 0 0-7.149M6.823 19.527l10.128-5.401v14.296M12.867 16.304v11.269"
        />
      </svg>
    );
  }
);

NyTimesLogosvgFill.displayName = "NyTimesLogosvgFill";

export default NyTimesLogosvgFill;
