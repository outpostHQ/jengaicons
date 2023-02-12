import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextItalicFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m18.65 8.052-5.488 16.462H8.755a1 1 0 1 0 0 2H19.01a1 1 0 1 0 0-2h-3.74l5.486-16.462h4.408a1 1 0 1 0 0-2H14.909a1 1 0 1 0 0 2h3.74Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TextItalicFill.displayName = "TextItalicFill";

export default TextItalicFill;
