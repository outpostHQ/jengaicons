import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShieldCheckFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M28.384 5.283v9.627c0 7.1-4.074 9.956-10.982 13.169a1 1 0 0 1-.876-.018c-7.086-3.642-10.99-6.226-10.99-13.15V5.28a.999.999 0 0 1 1-.998h20.848a1 1 0 0 1 1 1Zm-5.234 7.36a1 1 0 1 0-1.38-1.447l-6.643 6.341-2.977-2.84a1 1 0 0 0-1.38 1.446l3.666 3.5a1 1 0 0 0 1.381 0l7.333-7Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ShieldCheckFill.displayName = "ShieldCheckFill";

export default ShieldCheckFill;
