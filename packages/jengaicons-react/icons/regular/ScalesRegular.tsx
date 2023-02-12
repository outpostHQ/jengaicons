import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ScalesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 5.846v20.308M13.23 26.154h5.54M7.692 11.385l16.616-3.693M4 20.616c0 2.039 2.308 2.769 3.692 2.769 1.385 0 3.693-.73 3.693-2.77l-3.693-9.23L4 20.615ZM20.616 16.923c0 2.04 2.307 2.77 3.692 2.77 1.384 0 3.692-.73 3.692-2.77l-3.692-9.23-3.692 9.23Z"
        />
      </svg>
    );
  }
);

ScalesRegular.displayName = "ScalesRegular";

export default ScalesRegular;
