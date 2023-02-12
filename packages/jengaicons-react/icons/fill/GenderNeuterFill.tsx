import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GenderNeuterFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.958 22.006a8.641 8.641 0 0 0-.998-17.223 8.64 8.64 0 0 0-.998 17.223.982.982 0 0 0-.002.057v6.72a1 1 0 1 0 2 0v-6.72c0-.02 0-.038-.002-.057Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

GenderNeuterFill.displayName = "GenderNeuterFill";

export default GenderNeuterFill;
