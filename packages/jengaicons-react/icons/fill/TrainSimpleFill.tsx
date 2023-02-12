import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrainSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.268 5.283a1 1 0 0 1 1-1h17.384a1 1 0 0 1 1 1v9.077H7.268V5.283Zm0 11.077h19.384v7.23a1 1 0 0 1-1 1h-3.75l2.32 3.093a1 1 0 0 1-1.6 1.2l-2.77-3.692a.996.996 0 0 1-.2-.6h-5.384c0 .209-.065.42-.2.6l-2.77 3.692a1 1 0 1 1-1.6-1.2l2.32-3.092h-3.75a1 1 0 0 1-1-1V16.36Zm4.615 5.462a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77Zm11.539-1.385a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TrainSimpleFill.displayName = "TrainSimpleFill";

export default TrainSimpleFill;
