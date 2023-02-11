import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextboxFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M15.246 6.712a1 1 0 0 1 1 1v17.142a1 1 0 1 1-2 0v-2.571H5.96a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h8.286V7.712a1 1 0 0 1 1-1Zm-7.643 7.857a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.5v2.857a1 1 0 1 1-2 0v-2.857h-.5a1 1 0 0 1-1-1Zm12.071-4.286h8.286a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.286a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

TextboxFill.displayName = "TextboxFill";

export default TextboxFill;
