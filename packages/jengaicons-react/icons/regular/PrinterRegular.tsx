import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PrinterRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.2 17.256a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.26 23.017H4v-11.52h24v11.52h-4.216"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.32 6.696h15.36v4.8H8.32v-4.8ZM8.32 20.137h15.36v5.166H8.32v-5.166Z"
        />
      </svg>
    );
  }
);

PrinterRegular.displayName = "PrinterRegular";

export default PrinterRegular;
