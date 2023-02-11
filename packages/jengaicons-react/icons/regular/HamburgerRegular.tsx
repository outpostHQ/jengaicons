import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HamburgerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 16.462h24"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4.418 21.837 4.447-2.017a.1.1 0 0 1 .08 0l4.824 2a.1.1 0 0 0 .08 0l4.459-2a.1.1 0 0 1 .08 0l4.615 2a.1.1 0 0 0 .08 0l4.5-2.018"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6.77 21.077v.539a5 5 0 0 0 5 5h8.46a5 5 0 0 0 5-5v-.539M13.288 5.385h5.424a7.348 7.348 0 0 1 7.348 7.348c0 .02-.017.036-.037.036H5.977a.037.037 0 0 1-.037-.037 7.348 7.348 0 0 1 7.348-7.347Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

HamburgerRegular.displayName = "HamburgerRegular";

export default HamburgerRegular;
