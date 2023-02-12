import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EyedropperSampleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m23.129 14.477.66.66a2.169 2.169 0 0 1 0 3.044l-.943.943a1.078 1.078 0 0 1-1.536 0l-8.163-8.163a1.078 1.078 0 0 1 0-1.536l.943-.943a2.169 2.169 0 0 1 3.044 0l.66.66 3.718-3.718c1.455-1.455 3.826-1.535 5.308-.121a3.772 3.772 0 0 1 .08 5.402l-3.771 3.772Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m20.273 18.087-7.544 7.544a4.271 4.271 0 0 1-4.162 1.118l-3.152 1.374a1.078 1.078 0 0 1-1.186-.216v0a.768.768 0 0 1-.161-.862l1.454-3.34a4.27 4.27 0 0 1 1.119-4.163l7.543-7.544M5.954 20.431h11.989"
        />
      </svg>
    );
  }
);

EyedropperSampleRegular.displayName = "EyedropperSampleRegular";

export default EyedropperSampleRegular;
