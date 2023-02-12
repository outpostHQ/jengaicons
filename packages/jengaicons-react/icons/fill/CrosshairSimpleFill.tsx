import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CrosshairSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.001 15.283c.48-5.83 5.13-10.478 10.959-10.959v4.625a1 1 0 1 0 2 0V4.324c5.83.48 10.478 5.13 10.959 10.959h-4.626a1 1 0 1 0 0 2h4.626c-.481 5.83-5.13 10.478-10.96 10.959v-4.626a1 1 0 0 0-2 0v4.626c-5.829-.481-10.477-5.13-10.958-10.96h4.625a1 1 0 1 0 0-2H5.001Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CrosshairSimpleFill.displayName = "CrosshairSimpleFill";

export default CrosshairSimpleFill;
