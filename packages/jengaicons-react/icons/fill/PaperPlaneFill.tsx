import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaperPlaneFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.562 26.01 16.48 6.255a.5.5 0 0 1 .875-.002L28.35 26.007a.5.5 0 0 1-.585.72L17.96 23.67v-7.892a1 1 0 0 0-2 0v7.892l-9.811 3.06a.5.5 0 0 1-.587-.72Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

PaperPlaneFill.displayName = "PaperPlaneFill";

export default PaperPlaneFill;
