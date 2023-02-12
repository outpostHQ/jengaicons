import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DotsSixRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 14a2.77 2.77 0 1 0 0-5.538A2.77 2.77 0 0 0 16 14ZM6.77 14a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM25.23 14a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM16 23.538A2.77 2.77 0 1 0 16 18a2.77 2.77 0 0 0 0 5.538ZM6.77 23.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM25.23 23.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538Z"
        />
      </svg>
    );
  }
);

DotsSixRegular.displayName = "DotsSixRegular";

export default DotsSixRegular;
