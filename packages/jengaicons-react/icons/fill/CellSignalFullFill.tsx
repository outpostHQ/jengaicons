import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CellSignalFullFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m23.96 9.283-3 3v16h3v-19Zm2 19h2.5a.5.5 0 0 0 .5-.5V5.49a.5.5 0 0 0-.854-.354L25.96 7.283v21Zm-7 0v-14l-3 3v11h3Zm-5 0v-9l-3 3v6h3Zm-5 0v-4l-3.146 3.146a.5.5 0 0 0 .353.854H8.96Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CellSignalFullFill.displayName = "CellSignalFullFill";

export default CellSignalFullFill;
