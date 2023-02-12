import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CellSignalNoneFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 27.783V5.49a.5.5 0 0 0-.854-.354L5.814 27.43a.5.5 0 0 0 .353.854H28.46a.5.5 0 0 0 .5-.5Z"
        />
      </svg>
    );
  }
);

CellSignalNoneFill.displayName = "CellSignalNoneFill";

export default CellSignalNoneFill;
