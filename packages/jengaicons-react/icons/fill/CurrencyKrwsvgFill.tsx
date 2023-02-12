import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyKrwsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m7.675 10.569 4.642 11.428L16.96 10.57l4.643 11.428 4.643-11.428M6.96 16.283h20"
        />
      </svg>
    );
  }
);

CurrencyKrwsvgFill.displayName = "CurrencyKrwsvgFill";

export default CurrencyKrwsvgFill;
