import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ThermometerSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="M13.838 18.235V7.645c0-1.58 1.395-2.862 3.116-2.862s3.116 1.282 3.116 2.863v10.589a5.732 5.732 0 1 1-8.843 4.816 5.736 5.736 0 0 1 2.61-4.816Zm3.122-6.737a1 1 0 0 1 1 1v7.734a3.144 3.144 0 0 1-1 6.123 3.143 3.143 0 0 1-1-6.123v-7.734a1 1 0 0 1 1-1Zm0 10.572a1.143 1.143 0 1 0 0 2.286 1.143 1.143 0 0 0 0-2.286Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ThermometerSimpleFill.displayName = "ThermometerSimpleFill";

export default ThermometerSimpleFill;
