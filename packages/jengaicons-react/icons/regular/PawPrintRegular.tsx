import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PawPrintRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.692 16.5a2.308 2.308 0 1 0 0-4.615 2.308 2.308 0 0 0 0 4.615ZM6.308 16.5a2.308 2.308 0 1 0 0-4.615 2.308 2.308 0 0 0 0 4.615ZM11.846 10.962a2.308 2.308 0 1 0 0-4.616 2.308 2.308 0 0 0 0 4.616ZM20.154 10.962a2.308 2.308 0 1 0 0-4.616 2.308 2.308 0 0 0 0 4.616ZM22.37 19.72a5.03 5.03 0 0 1-2.378-3v0a4.154 4.154 0 0 0-7.984 0 5.03 5.03 0 0 1-2.377 3 3.692 3.692 0 0 0 3.196 6.645 8.284 8.284 0 0 1 6.346 0 3.693 3.693 0 0 0 3.196-6.646Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

PawPrintRegular.displayName = "PawPrintRegular";

export default PawPrintRegular;
