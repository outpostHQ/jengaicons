import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FunctionRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeWidth="2"
          d="M24.571 6h-2.844a5 5 0 0 0-4.929 4.159l-1.993 11.682A5 5 0 0 1 9.876 26H7.43"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M24.571 20.338 18.91 26M24.571 26l-5.662-5.662"
        />
      </svg>
    );
  }
);

FunctionRegular.displayName = "FunctionRegular";

export default FunctionRegular;
