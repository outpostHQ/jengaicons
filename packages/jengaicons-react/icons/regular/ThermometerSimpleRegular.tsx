import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ThermometerSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 25.073a2.143 2.143 0 1 0 0-4.287 2.143 2.143 0 0 0 0 4.287ZM16 20.787v-8.572M12.878 17.952V7.363c0-1.581 1.395-2.863 3.116-2.863s3.117 1.282 3.117 2.863v10.589"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M12.88 17.958a5.732 5.732 0 1 0 6.239 0"
        />
      </svg>
    );
  }
);

ThermometerSimpleRegular.displayName = "ThermometerSimpleRegular";

export default ThermometerSimpleRegular;
