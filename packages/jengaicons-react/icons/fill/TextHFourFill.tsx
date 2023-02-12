import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextHFourFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.73 8.404a1 1 0 0 1 1 1v4.652h7.796V9.404a1 1 0 0 1 2 0v11.303a1 1 0 1 1-2 0v-4.651H8.729v4.651a1 1 0 1 1-2 0V9.404a1 1 0 0 1 1-1ZM26.19 15.98a1 1 0 0 1 1 1v6.183a1 1 0 1 1-2 0v-2.147h-3.673a1 1 0 0 1-.941-1.338l2.32-6.466a1 1 0 0 1 1.883.676l-1.84 5.128h2.251V16.98a1 1 0 0 1 1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TextHFourFill.displayName = "TextHFourFill";

export default TextHFourFill;
