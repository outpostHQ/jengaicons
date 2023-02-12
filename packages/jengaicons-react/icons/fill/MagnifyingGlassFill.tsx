import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MagnifyingGlassFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.144 22.88a10.457 10.457 0 0 1-6.684 2.403c-5.799 0-10.5-4.701-10.5-10.5 0-5.8 4.701-10.5 10.5-10.5s10.5 4.7 10.5 10.5c0 2.54-.902 4.87-2.403 6.685.012.01.023.022.034.033l6.075 6.075a1 1 0 0 1-1.414 1.414l-6.075-6.075a.884.884 0 0 1-.033-.034Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

MagnifyingGlassFill.displayName = "MagnifyingGlassFill";

export default MagnifyingGlassFill;
