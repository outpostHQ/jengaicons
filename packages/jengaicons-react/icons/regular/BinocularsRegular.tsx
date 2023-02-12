import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BinocularsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.23 11.816h5.54M8.615 25.201a4.615 4.615 0 1 0 0-9.23 4.615 4.615 0 0 0 0 9.23ZM23.385 25.201a4.615 4.615 0 1 0 0-9.23 4.615 4.615 0 0 0 0 9.23Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.658 18.204 9.272 7.247c1.515-.633 2.388-.561 3.962 0l-.067 12.574M27.345 18.204 22.731 7.247c-1.515-.633-2.388-.561-3.962 0l.067 12.574"
        />
      </svg>
    );
  }
);

BinocularsRegular.displayName = "BinocularsRegular";

export default BinocularsRegular;
