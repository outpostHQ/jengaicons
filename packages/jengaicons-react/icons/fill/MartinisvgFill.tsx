import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MartinisvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.303 18.076v8.07M12.82 26.146h8.967"
        />
        <path
          fill={color || "#000000"}
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.392 10.006H8.848l8.453 7.806 8.091-7.806Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.96 6.42h24L17.31 18.075 4.96 6.42Z"
        />
      </svg>
    );
  }
);

MartinisvgFill.displayName = "MartinisvgFill";

export default MartinisvgFill;
