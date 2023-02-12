import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const QuestionFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 28.283c6.627 0 12-5.373 12-12s-5.373-12-12-12c-6.628 0-12 5.373-12 12s5.372 12 12 12Zm0-5.931a1.38 1.38 0 1 0 0-2.759 1.38 1.38 0 0 0 0 2.759Zm-2.083-9.055a2.083 2.083 0 1 1 2.083 2.083 1 1 0 0 0-1 1v1.44a1 1 0 1 0 2 0v-.564a4.084 4.084 0 0 0-1-8.042 4.083 4.083 0 0 0-4.083 4.083 1 1 0 0 0 2 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

QuestionFill.displayName = "QuestionFill";

export default QuestionFill;
