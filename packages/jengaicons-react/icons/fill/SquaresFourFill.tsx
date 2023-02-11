import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SquaresFourFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M5.96 4.283a1 1 0 0 0-1 1v7.6a1 1 0 0 0 1 1h7.6a1 1 0 0 0 1-1v-7.6a1 1 0 0 0-1-1h-7.6Zm0 14.4a1 1 0 0 0-1 1v7.6a1 1 0 0 0 1 1h7.6a1 1 0 0 0 1-1v-7.6a1 1 0 0 0-1-1h-7.6Zm13.4-13.4a1 1 0 0 1 1-1h7.6a1 1 0 0 1 1 1v7.6a1 1 0 0 1-1 1h-7.6a1 1 0 0 1-1-1v-7.6Zm1 13.4a1 1 0 0 0-1 1v7.6a1 1 0 0 0 1 1h7.6a1 1 0 0 0 1-1v-7.6a1 1 0 0 0-1-1h-7.6Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

SquaresFourFill.displayName = "SquaresFourFill";

export default SquaresFourFill;
