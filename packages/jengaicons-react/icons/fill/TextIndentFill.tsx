import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextIndentFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.072 8.863a1 1 0 1 0-1.414 1.414l2.853 2.853-2.853 2.853a1 1 0 1 0 1.414 1.414l3.56-3.56a1 1 0 0 0 0-1.414l-3.56-3.56Zm17.119-.293H15.282a1 1 0 1 0 0 2h10.909a1 1 0 1 0 0-2Zm-10.909 6.713a1 1 0 1 0 0 2h10.909a1 1 0 1 0 0-2H15.282Zm-8.553 7.713a1 1 0 0 1 1-1h18.462a1 1 0 0 1 0 2H7.729a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TextIndentFill.displayName = "TextIndentFill";

export default TextIndentFill;
