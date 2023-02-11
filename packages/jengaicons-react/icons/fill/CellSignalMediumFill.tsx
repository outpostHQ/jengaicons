import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CellSignalMediumFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 27.783V5.49a.5.5 0 0 0-.854-.354l-7.146 7.147v16h7.5a.5.5 0 0 0 .5-.5Zm-10 .5v-14l-3 3v11h3Zm-5 0v-9l-8.146 8.146a.5.5 0 0 0 .353.854h7.793Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CellSignalMediumFill.displayName = "CellSignalMediumFill";

export default CellSignalMediumFill;
