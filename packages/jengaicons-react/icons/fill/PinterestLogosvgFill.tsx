import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PinterestLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m15.96 11.424-4 17M8.654 19.994a10 10 0 1 1 18.307-5.57c0 5.523-4 9-8 9s-5.204-2.633-5.204-2.633"
        />
      </svg>
    );
  }
);

PinterestLogosvgFill.displayName = "PinterestLogosvgFill";

export default PinterestLogosvgFill;
