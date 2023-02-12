import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WaveSineRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeWidth="2"
          d="m4 16.712 3.569-5.609c1.175-1.847 3.869-1.854 5.054-.013l6.976 10.84c1.18 1.836 3.865 1.836 5.046 0L28 16.712"
        />
      </svg>
    );
  }
);

WaveSineRegular.displayName = "WaveSineRegular";

export default WaveSineRegular;
