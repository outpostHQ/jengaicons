import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DotsThreeOutlineRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M16 18.77a2.77 2.77 0 1 0 0-5.54 2.77 2.77 0 0 0 0 5.54ZM6.77 18.77a2.77 2.77 0 1 0 0-5.54 2.77 2.77 0 0 0 0 5.54ZM25.23 18.77a2.77 2.77 0 1 0 0-5.54 2.77 2.77 0 0 0 0 5.54Z"
        />
      </svg>
    );
  }
);

DotsThreeOutlineRegular.displayName = "DotsThreeOutlineRegular";

export default DotsThreeOutlineRegular;
