import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextAlignJustifyFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M7.729 8.99a1 1 0 1 0 0 2H26.19a1 1 0 0 0 0-2H7.73Zm0 4.195a1 1 0 1 0 0 2H26.19a1 1 0 1 0 0-2H7.73Zm-1 5.196a1 1 0 0 1 1-1h18.462a1 1 0 0 1 0 2H7.73a1 1 0 0 1-1-1Zm1 3.196a1 1 0 1 0 0 2h18.462a1 1 0 0 0 0-2H7.73Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

TextAlignJustifyFill.displayName = "TextAlignJustifyFill";

export default TextAlignJustifyFill;
