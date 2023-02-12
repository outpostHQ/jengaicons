import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ThermometerColdFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.067 7.646v10.589a5.736 5.736 0 0 0-2.61 4.816 5.732 5.732 0 1 0 8.842-4.816V7.645c0-1.58-1.395-2.862-3.116-2.862s-3.116 1.282-3.116 2.863Zm4.121 8.28a1 1 0 1 0-2 0v4.306a3.144 3.144 0 0 0 1 6.123 3.143 3.143 0 0 0 1-6.123v-4.305ZM13.18 22.07H13.198a1.143 1.143 0 1 1-.018 0ZM24.046 8.212a1 1 0 1 0-2 0v2.051l-1.948-.634a1 1 0 0 0-.62 1.901l1.951.636-1.207 1.662a1 1 0 0 0 1.619 1.175l1.205-1.66 1.205 1.66a1 1 0 0 0 1.618-1.175l-1.206-1.662 1.95-.636a1 1 0 1 0-.62-1.901l-1.947.634V8.212Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ThermometerColdFill.displayName = "ThermometerColdFill";

export default ThermometerColdFill;
