import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AnchorSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.96 8.283a3.001 3.001 0 0 1-2.014 2.834c.01.054.014.11.014.166v14.954a11 11 0 0 0 9.954-9.954H25.96a1 1 0 1 1 0-2h2.5c.817 0 1.525.67 1.488 1.542a13 13 0 0 1-25.977 0 1.484 1.484 0 0 1 1.489-1.542h2.5a1 1 0 1 1 0 2H6.005a11 11 0 0 0 9.955 9.954V11.283c0-.057.004-.112.013-.166a3.001 3.001 0 1 1 3.987-2.834Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

AnchorSimpleFill.displayName = "AnchorSimpleFill";

export default AnchorSimpleFill;
