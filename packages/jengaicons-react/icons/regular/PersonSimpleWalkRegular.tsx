import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PersonSimpleWalkRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.834 10.039a2.77 2.77 0 1 0 0-5.539 2.77 2.77 0 0 0 0 5.539ZM16.355 12.972 9.604 28.5M14.297 18.737l4.487 3.219v6.535M6.77 16.08c1.875-1.9 6.418-5.25 9.59-3.461 1.695 2.018 5.841 5.898 8.87 5.263"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

PersonSimpleWalkRegular.displayName = "PersonSimpleWalkRegular";

export default PersonSimpleWalkRegular;
