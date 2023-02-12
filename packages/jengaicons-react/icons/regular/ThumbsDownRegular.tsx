import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ThumbsDownRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 17.383h6.492V5.327H4z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m15.394 26.674-4.902-9.64V5.327h15.699l1.54 12.781a2 2 0 0 1-1.986 2.24h-6.499v3.327a3 3 0 0 1-3 3h-.852Z"
        />
      </svg>
    );
  }
);

ThumbsDownRegular.displayName = "ThumbsDownRegular";

export default ThumbsDownRegular;
