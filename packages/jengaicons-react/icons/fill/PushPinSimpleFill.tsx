import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PushPinSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.28 3.283a1 1 0 1 0 0 2h1.743l-2.527 14.32H6.4a1 1 0 1 0 0 2h9.56v6.68a1 1 0 1 0 2 0v-6.68h9.56a1 1 0 1 0 0-2h-2.097l-2.527-14.32h1.744a1 1 0 1 0 0-2H9.28Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

PushPinSimpleFill.displayName = "PushPinSimpleFill";

export default PushPinSimpleFill;
