import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextHFourRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6 8.548v12.245M16.612 14.67H6M16.612 8.548v12.245M26 16.754v6.698M23.452 13.038l-2.515 7.005H26"
        />
      </svg>
    );
  }
);

TextHFourRegular.displayName = "TextHFourRegular";

export default TextHFourRegular;
