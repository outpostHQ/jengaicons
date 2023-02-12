import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const QrCodeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.4 18.4v4.8M18.4 28h4.8v-9.6M23.2 20.8H28M28 25.6V28"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4h9.6v9.6H4V4ZM4 18.4h9.6V28H4v-9.6ZM18.4 4H28v9.6h-9.6V4Z"
        />
      </svg>
    );
  }
);

QrCodeRegular.displayName = "QrCodeRegular";

export default QrCodeRegular;
