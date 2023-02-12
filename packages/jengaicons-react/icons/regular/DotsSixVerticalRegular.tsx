import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DotsSixVerticalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.23 18.77a2.77 2.77 0 1 0 0-5.54 2.77 2.77 0 0 0 0 5.54ZM11.23 9.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM11.23 28a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM20.77 18.77a2.77 2.77 0 1 0 0-5.54 2.77 2.77 0 0 0 0 5.54ZM20.77 9.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM20.77 28a2.77 2.77 0 1 0 0-5.539 2.77 2.77 0 0 0 0 5.539Z"
        />
      </svg>
    );
  }
);

DotsSixVerticalRegular.displayName = "DotsSixVerticalRegular";

export default DotsSixVerticalRegular;
