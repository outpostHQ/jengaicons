import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FlashlightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.548 3.283a1 1 0 0 0-1 1v6.176a1 1 0 0 0 .17.559l2.234 3.32v13.945a1 1 0 0 0 1 1h9.796a1 1 0 0 0 1-1V14.36l2.43-3.31a1 1 0 0 0 .194-.592V4.283a1 1 0 0 0-1-1H9.548Zm1 6.871V5.283h12.824v4.849l-.17.232H10.688l-.14-.21Zm2.404 14.129v3h7.796v-3h-7.796Zm4.028-9.747a1 1 0 0 1 1 1v3.798a1 1 0 1 1-2 0v-3.797a1 1 0 0 1 1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FlashlightFill.displayName = "FlashlightFill";

export default FlashlightFill;
