import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NotePencilFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.575 5.537H6.165v21.492h21.591V14.334a1 1 0 0 1 2 0v13.195a1.5 1.5 0 0 1-1.5 1.5H5.664a1.5 1.5 0 0 1-1.5-1.5V5.037a1.5 1.5 0 0 1 1.5-1.5h11.911a1 1 0 1 1 0 2Zm7.076-1.155a.5.5 0 0 0-.707 0l-9.98 9.944a.5.5 0 0 0-.144.306l-.412 4.234a.5.5 0 0 0 .498.549h4.628a.5.5 0 0 0 .355-.149L28.814 9.25a.5.5 0 0 0-.002-.706L24.65 4.382Zm1.07 5.986-2.75-2.75a.5.5 0 0 1 0-.706l1.053-1.053a.5.5 0 0 1 .705-.002l2.747 2.718a.5.5 0 0 1 .007.704l-1.05 1.083a.5.5 0 0 1-.713.005Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

NotePencilFill.displayName = "NotePencilFill";

export default NotePencilFill;
