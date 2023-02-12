import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CellSignalSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.7 4.61a1 1 0 1 0-1.48 1.346l9.67 10.637L4.143 28.341a.5.5 0 0 0 .354.854h23.306a1 1 0 0 0 .727-1.673L7.7 4.61Zm20.406.526-8.468 8.469 9.322 10.749V5.49a.5.5 0 0 0-.854-.354Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CellSignalSlashFill.displayName = "CellSignalSlashFill";

export default CellSignalSlashFill;
