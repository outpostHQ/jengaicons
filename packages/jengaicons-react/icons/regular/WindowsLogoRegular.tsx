import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WindowsLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.09 6 28 4v9.818H17.09V6ZM17.09 18.182H28V28l-10.91-2v-7.818ZM4 18.182h8.727v7.041l-8.727-2v-5.041ZM4 8.777l8.727-2v7.041H4V8.777Z"
        />
      </svg>
    );
  }
);

WindowsLogoRegular.displayName = "WindowsLogoRegular";

export default WindowsLogoRegular;
