import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DotsSixRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 14a2.77 2.77 0 1 0 0-5.538A2.77 2.77 0 0 0 16 14ZM6.77 14a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM25.23 14a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM16 23.538A2.77 2.77 0 1 0 16 18a2.77 2.77 0 0 0 0 5.538ZM6.77 23.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM25.23 23.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    );
  }
);

DotsSixRegular.displayName = "DotsSixRegular";

export default DotsSixRegular;
