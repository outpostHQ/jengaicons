import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FilmSlateFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M3.994 10.74A1 1 0 0 1 4.7 9.517l21.858-5.857a1 1 0 0 1 1.225.707l1.37 5.117a1 1 0 0 1-.706 1.225l-18.253 4.89H27.96a1 1 0 0 1 1 1v10.344a1 1 0 0 1-1 1H6.45a1 1 0 0 1-1-1v-10.87a1.004 1.004 0 0 1-.085-.215l-1.371-5.116Zm2.19.449.854 3.185 7.003-1.877-4.032-2.333-3.825 1.025Zm20.78-2.154-3.969 1.063-4.037-2.332 7.153-1.916.853 3.185Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

FilmSlateFill.displayName = "FilmSlateFill";

export default FilmSlateFill;
