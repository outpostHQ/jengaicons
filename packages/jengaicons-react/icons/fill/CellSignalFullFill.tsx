import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CellSignalFullFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m23.96 9.283-3 3v16h3v-19Zm2 19h2.5a.5.5 0 0 0 .5-.5V5.49a.5.5 0 0 0-.854-.354L25.96 7.283v21Zm-7 0v-14l-3 3v11h3Zm-5 0v-9l-3 3v6h3Zm-5 0v-4l-3.146 3.146a.5.5 0 0 0 .353.854H8.96Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CellSignalFullFill.displayName = "CellSignalFullFill";

export default CellSignalFullFill;
