import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CreditCardsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.961 7.976H28.96v16.615H4.961z"
        />
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M4.96 12.69h24v11.9h-24v-11.9Zm15.615 8.208a1 1 0 0 1 1-1h3.692a1 1 0 1 1 0 2h-3.692a1 1 0 0 1-1-1Zm-4.538-1a1 1 0 1 0 0 2h1.846a1 1 0 1 0 0-2h-1.846Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CreditCardsvgFill.displayName = "CreditCardsvgFill";

export default CreditCardsvgFill;
