import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AsteriskSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16.96 4.87v12.617M4.96 13.588l12 3.9M9.548 27.695l7.412-10.208M24.372 27.695 16.96 17.487M28.96 13.588l-12 3.9"
        />
      </svg>
    );
  }
);

AsteriskSimpleFill.displayName = "AsteriskSimpleFill";

export default AsteriskSimpleFill;
