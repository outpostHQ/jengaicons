import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PinwheelFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M13.378 4.669a.03.03 0 0 1 .018-.038 5.934 5.934 0 0 1 7.516 3.735l.066.197c.712 2.12.16 4.36-1.251 5.901l8.203-2.792a.03.03 0 0 1 .038.018 5.934 5.934 0 0 1-3.705 7.53l-.197.067a5.908 5.908 0 0 1-3.79.012l7.239 7.24a1 1 0 0 1-1.414 1.414l-7.827-7.827 2.12 6.307a.03.03 0 0 1-.018.037 5.934 5.934 0 0 1-7.516-3.733l-.066-.197a5.935 5.935 0 0 1 1.529-6.188l-8.337 2.822a.03.03 0 0 1-.037-.018 5.934 5.934 0 0 1 3.718-7.524l.196-.066a5.936 5.936 0 0 1 6.431 1.782l-2.916-8.68Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

PinwheelFill.displayName = "PinwheelFill";

export default PinwheelFill;
