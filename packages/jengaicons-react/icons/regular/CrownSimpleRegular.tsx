import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CrownSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m4 10.633 3.559 14.52c6.833-1.959 14.424-.816 17.366 0L28 10.633l-7.516 4.185-4.299-7.971-4.242 7.971L4 10.633Z"
        />
      </svg>
    );
  }
);

CrownSimpleRegular.displayName = "CrownSimpleRegular";

export default CrownSimpleRegular;
