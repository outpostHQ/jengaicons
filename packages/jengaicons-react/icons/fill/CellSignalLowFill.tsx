import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CellSignalLowFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 5.49v22.293a.5.5 0 0 1-.5.5h-17.5v-6L28.106 5.136a.5.5 0 0 1 .854.354Zm-20 18.793-3.146 3.146a.5.5 0 0 0 .353.854H8.96v-4Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CellSignalLowFill.displayName = "CellSignalLowFill";

export default CellSignalLowFill;
