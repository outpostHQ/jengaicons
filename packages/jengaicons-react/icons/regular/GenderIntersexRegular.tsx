import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GenderIntersexRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M14.393 21.152a6.889 6.889 0 1 0 0-13.777 6.889 6.889 0 0 0 0 13.777ZM14.393 21.152V28.5M10.719 25.285h7.348M19.488 9.628l5.008-5.008M18.745 4.5h5.75v5.75"
        />
      </svg>
    );
  }
);

GenderIntersexRegular.displayName = "GenderIntersexRegular";

export default GenderIntersexRegular;
