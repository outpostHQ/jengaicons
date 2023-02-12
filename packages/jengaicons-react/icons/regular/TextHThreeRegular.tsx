import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextHThreeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 8.444v12M16.4 14.444H6M16.4 8.444v12M21.2 22.55a2.7 2.7 0 0 0 4.8-1.694c0-1.49-1.624-2.699-3.114-2.699L26 13.644h-4.8"
        />
      </svg>
    );
  }
);

TextHThreeRegular.displayName = "TextHThreeRegular";

export default TextHThreeRegular;
