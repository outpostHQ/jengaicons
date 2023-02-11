import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AndroidLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 23.809V21.17c0-6.632 5.326-12.107 11.958-12.13a12 12 0 0 1 12.042 12v2.769a.923.923 0 0 1-.923.923H5.883a.923.923 0 0 1-.923-.923Zm16.154-2.77a1.385 1.385 0 1 0 0-2.768 1.385 1.385 0 0 0 0 2.769Zm-6.923-1.384a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0Z"
          fill="#1C1B1F"
        />
        <path
          d="m5.883 8.117 3.586 3.585M28.037 8.117l-3.565 3.565"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

AndroidLogosvgFill.displayName = "AndroidLogosvgFill";

export default AndroidLogosvgFill;
