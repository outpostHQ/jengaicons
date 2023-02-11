import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PinwheelRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.79 18.836 25.952 28"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3 5.793a.028.028 0 0 1 .018-.035 5.52 5.52 0 0 1 6.99 3.474l.062.183a5.52 5.52 0 0 1-3.475 6.99.028.028 0 0 1-.035-.017L13.3 5.793ZM26.2 13.243a.028.028 0 0 1 .036.018 5.52 5.52 0 0 1-3.447 7.004l-.182.062a5.52 5.52 0 0 1-7.005-3.446.028.028 0 0 1 .018-.035l10.58-3.603Z"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
        <path
          d="M18.687 26.037a.028.028 0 0 1-.017.035 5.52 5.52 0 0 1-6.992-3.472l-.061-.183a5.52 5.52 0 0 1 3.472-6.992.028.028 0 0 1 .035.018l3.563 10.594ZM16.377 14.982a.028.028 0 0 0 .018-.035 5.52 5.52 0 0 0-6.999-3.46l-.183.063a5.52 5.52 0 0 0-3.458 6.998c.005.014.02.022.035.017l10.587-3.584Z"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

PinwheelRegular.displayName = "PinwheelRegular";

export default PinwheelRegular;
