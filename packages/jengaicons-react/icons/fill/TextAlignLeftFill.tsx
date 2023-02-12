import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextAlignLeftFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.73 8.99a1 1 0 1 0 0 2h18.46a1 1 0 0 0 0-2H7.73Zm0 4.195a1 1 0 1 0 0 2h13.426a1 1 0 1 0 0-2H7.729Zm-1 5.196a1 1 0 0 1 1-1h18.461a1 1 0 1 1 0 2H7.731a1 1 0 0 1-1-1Zm1 3.196a1 1 0 1 0 0 2h13.426a1 1 0 1 0 0-2H7.73Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TextAlignLeftFill.displayName = "TextAlignLeftFill";

export default TextAlignLeftFill;
