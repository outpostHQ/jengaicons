import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextAlignCenterFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.729 8.99a1 1 0 1 0 0 2h18.462a1 1 0 1 0 0-2H7.729Zm2.517 4.195a1 1 0 1 0 0 2h13.427a1 1 0 0 0 0-2H10.246ZM6.73 18.38a1 1 0 0 1 1-1h18.46a1 1 0 1 1 0 2H7.73a1 1 0 0 1-1-1Zm3.517 3.196a1 1 0 1 0 0 2h13.426a1 1 0 0 0 0-2H10.246Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TextAlignCenterFill.displayName = "TextAlignCenterFill";

export default TextAlignCenterFill;
