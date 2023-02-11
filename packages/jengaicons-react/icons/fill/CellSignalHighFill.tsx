import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CellSignalHighFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.96 9.283 5.814 27.429a.5.5 0 0 0 .353.854H23.96v-19Zm2 19h2.5a.5.5 0 0 0 .5-.5V5.49a.5.5 0 0 0-.854-.354L25.96 7.283v21Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CellSignalHighFill.displayName = "CellSignalHighFill";

export default CellSignalHighFill;
