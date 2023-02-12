import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const IdentificationBadgeFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.96 4.783a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-18Zm5 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm1.702 9.298a2.298 2.298 0 1 1 2.31 2.298h-.024a2.298 2.298 0 0 1-2.286-2.298Zm6.596 0c0 1.246-.53 2.369-1.378 3.154a5.4 5.4 0 0 1 2.484 4.548 1 1 0 1 1-2 0 3.404 3.404 0 0 0-3.39-3.404h-.028a3.404 3.404 0 0 0-3.39 3.404 1 1 0 0 1-2 0 5.4 5.4 0 0 1 2.484-4.549 4.298 4.298 0 1 1 7.218-3.154Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

IdentificationBadgeFill.displayName = "IdentificationBadgeFill";

export default IdentificationBadgeFill;
