import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LadderRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.182 4H11.09M13.273 4 4.545 28M13.273 28 22 4M8.513 17.09h8.728M10.886 10.545h8.727M6.127 23.637h8.727M20.363 8.5 27.454 28M16.054 20.363h8.619"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

LadderRegular.displayName = "LadderRegular";

export default LadderRegular;
