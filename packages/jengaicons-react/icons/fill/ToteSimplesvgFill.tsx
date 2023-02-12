import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ToteSimplesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.303 10.228a4.657 4.657 0 1 1 9.314 0"
        />
        <path
          fill={color || "#000000"}
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.823 26.995h20.274l1.863-16.767h-24l1.863 16.767Z"
        />
      </svg>
    );
  }
);

ToteSimplesvgFill.displayName = "ToteSimplesvgFill";

export default ToteSimplesvgFill;
