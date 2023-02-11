import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextUnderlineRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="M6 25.09h20"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.727 6.91v7.272A7.273 7.273 0 0 0 16 21.454v0a7.273 7.273 0 0 0 7.273-7.272V6.909"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

TextUnderlineRegular.displayName = "TextUnderlineRegular";

export default TextUnderlineRegular;
