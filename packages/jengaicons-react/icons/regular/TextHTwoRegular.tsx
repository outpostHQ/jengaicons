import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextHTwoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6 8.8v12M16.4 14.8H6M16.4 8.8v12M21.2 14.853a2.598 2.598 0 0 1 4.8 1.38c0 .362-.064.627-.286 1.006-.222.378-4.514 5.961-4.514 5.961H26"
        />
      </svg>
    );
  }
);

TextHTwoRegular.displayName = "TextHTwoRegular";

export default TextHTwoRegular;
