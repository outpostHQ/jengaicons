import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const IdentificationCardFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M5.96 6.783a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-22Zm4.745 7.798a2.298 2.298 0 1 1 2.31 2.298h-.024a2.298 2.298 0 0 1-2.286-2.298Zm6.596 0c0 1.246-.53 2.369-1.378 3.154a5.4 5.4 0 0 1 2.484 4.548 1 1 0 1 1-2 0 3.404 3.404 0 0 0-3.39-3.404h-.028a3.404 3.404 0 0 0-3.39 3.404 1 1 0 1 1-2 0 5.4 5.4 0 0 1 2.484-4.549 4.298 4.298 0 1 1 7.218-3.154Zm1.659.202a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

IdentificationCardFill.displayName = "IdentificationCardFill";

export default IdentificationCardFill;
