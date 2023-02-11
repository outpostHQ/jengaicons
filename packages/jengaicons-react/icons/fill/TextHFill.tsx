import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextHFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.958 6.28a1 1 0 0 1 1 1v8.003h16.004V7.28a1 1 0 1 1 2 0V25.285a1 1 0 1 1-2 0v-8.002H8.958v8.002a1 1 0 1 1-2 0V7.281a1 1 0 0 1 1-1Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

TextHFill.displayName = "TextHFill";

export default TextHFill;
