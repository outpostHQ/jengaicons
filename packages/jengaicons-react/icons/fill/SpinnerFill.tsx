import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpinnerFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.96 4.283a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0v-4Zm8.192 4.222a1 1 0 1 0-1.414-1.414L21.91 9.919a1 1 0 0 0 1.414 1.414l2.828-2.828Zm-2.192 7.778a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Zm-.636 4.95a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414l-2.828-2.828Zm-6.364 2.05a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1Zm-4.95-.636a1 1 0 1 0-1.414-1.414L7.767 24.06a1 1 0 0 0 1.415 1.414l2.828-2.828Zm-8.05-6.364a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm5.222-9.192a1 1 0 0 0-1.415 1.414l2.829 2.828A1 1 0 0 0 12.01 9.92L9.182 7.091Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

SpinnerFill.displayName = "SpinnerFill";

export default SpinnerFill;
