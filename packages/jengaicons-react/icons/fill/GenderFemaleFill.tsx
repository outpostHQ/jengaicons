import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GenderFemaleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.96 12.783a8.002 8.002 0 0 1-7.002 7.938l.002.062v3.444h3.444a1 1 0 1 1 0 2H17.96v2.556a1 1 0 0 1-2 0v-2.556h-3.444a1 1 0 1 1 0-2h3.444v-3.444c0-.02 0-.041.002-.062a8.001 8.001 0 0 1 .998-15.938 8 8 0 0 1 8 8Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

GenderFemaleFill.displayName = "GenderFemaleFill";

export default GenderFemaleFill;
