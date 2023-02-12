import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ToiletRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.16 7.84h1.92"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.32 4h15.36v9.6H8.32V4ZM12.307 23.2h7.386l.96 4.8h-9.306l.96-4.8ZM5.44 13.6h21.12v1.6a8 8 0 0 1-8 8h-5.12a8 8 0 0 1-8-8v-1.6Z"
        />
      </svg>
    );
  }
);

ToiletRegular.displayName = "ToiletRegular";

export default ToiletRegular;
