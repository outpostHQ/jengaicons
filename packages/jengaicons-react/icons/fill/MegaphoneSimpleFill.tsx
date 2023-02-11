import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MegaphoneSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 7.448a1 1 0 0 1 1.28-.96l13.738 4.005c-.015.069-.023.14-.023.213v9.78h2v4.965h1.998v-5.549l-1.998.583V11.07l6.285 1.832a1 1 0 0 1 .72.96v3.83a1 1 0 0 1-.72.96l-2.287.667v7.132a1 1 0 0 1-1 1h-3.998a1 1 0 0 1-1-1v-5.383L6.24 25.067a1 1 0 0 1-1.28-.96V7.447Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

MegaphoneSimpleFill.displayName = "MegaphoneSimpleFill";

export default MegaphoneSimpleFill;
