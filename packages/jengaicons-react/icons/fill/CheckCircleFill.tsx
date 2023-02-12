import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CheckCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-5.81-2.277a1 1 0 0 0-1.38-1.447L15.127 18.9l-2.977-2.84a1 1 0 0 0-1.38 1.446l3.666 3.5a1 1 0 0 0 1.381 0l7.333-7Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CheckCircleFill.displayName = "CheckCircleFill";

export default CheckCircleFill;
