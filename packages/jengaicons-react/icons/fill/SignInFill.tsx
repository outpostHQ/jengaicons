import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SignInFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.759 26.384a1 1 0 0 1 1-1h3.402V8.182h-3.402a1 1 0 1 1 0-2h4.402a1 1 0 0 1 1 1v19.202a1 1 0 0 1-1 1h-4.402a1 1 0 0 1-1-1Zm-3.415-10.601-2.535-2.536a1 1 0 0 1 1.414-1.414l4.236 4.236a1.022 1.022 0 0 1 .198.273.995.995 0 0 1-.192 1.149l-4.242 4.242a1 1 0 0 1-1.414-1.415l2.536-2.535H7.759a1 1 0 1 1 0-2h9.585Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

SignInFill.displayName = "SignInFill";

export default SignInFill;
