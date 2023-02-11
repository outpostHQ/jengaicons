import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MouseSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.773 4.283a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h.373a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8h-.373Zm1.187 3.328a1 1 0 0 0-2 0v3.344a1 1 0 1 0 2 0V7.61Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

MouseSimpleFill.displayName = "MouseSimpleFill";

export default MouseSimpleFill;
