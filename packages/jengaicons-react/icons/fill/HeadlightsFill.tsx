import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HeadlightsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 16.283a7.714 7.714 0 0 0 7.714 7.714h5.016c.07 0 .127-.057.127-.127V8.696a.127.127 0 0 0-.127-.127h-5.016a7.714 7.714 0 0 0-7.714 7.714Zm16.286-6.143a1 1 0 1 0 0 2h7.714a1 1 0 1 0 0-2h-7.714Zm0 10.286a1 1 0 1 0 0 2h7.714a1 1 0 1 0 0-2h-7.714Zm-1-4.143a1 1 0 0 1 1-1h7.714a1 1 0 0 1 0 2h-7.714a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

HeadlightsFill.displayName = "HeadlightsFill";

export default HeadlightsFill;
