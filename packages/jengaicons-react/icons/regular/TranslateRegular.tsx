import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TranslateRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m28 26.615-6.462-12.923-6.461 12.923M16.923 22.923h9.23M11.384 5.385v2.769M4 8.154h14.77M15.077 8.154A11.077 11.077 0 0 1 4 19.23"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.323 11.846a11.081 11.081 0 0 0 10.445 7.381"
        />
      </svg>
    );
  }
);

TranslateRegular.displayName = "TranslateRegular";

export default TranslateRegular;
