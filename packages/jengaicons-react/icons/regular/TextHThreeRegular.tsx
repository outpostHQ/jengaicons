import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextHThreeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6 8.444v12M16.4 14.444H6M16.4 8.444v12M21.2 22.55a2.7 2.7 0 0 0 4.8-1.694c0-1.49-1.624-2.699-3.114-2.699L26 13.644h-4.8"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

TextHThreeRegular.displayName = "TextHThreeRegular";

export default TextHThreeRegular;
