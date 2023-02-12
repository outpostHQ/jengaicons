import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TiktokLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21.859 13.973a11.701 11.701 0 0 0 6.857 2.207v-4.898a6.857 6.857 0 0 1-6.857-6.858H16.96v15.674a3.43 3.43 0 1 1-4.898-3.099v-5.098a8.327 8.327 0 1 0 9.796 8.197v-6.125Z"
        />
      </svg>
    );
  }
);

TiktokLogosvgFill.displayName = "TiktokLogosvgFill";

export default TiktokLogosvgFill;
