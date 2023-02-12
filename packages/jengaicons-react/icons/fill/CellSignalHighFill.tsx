import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CellSignalHighFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M23.96 9.283 5.814 27.429a.5.5 0 0 0 .353.854H23.96v-19Zm2 19h2.5a.5.5 0 0 0 .5-.5V5.49a.5.5 0 0 0-.854-.354L25.96 7.283v21Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CellSignalHighFill.displayName = "CellSignalHighFill";

export default CellSignalHighFill;
