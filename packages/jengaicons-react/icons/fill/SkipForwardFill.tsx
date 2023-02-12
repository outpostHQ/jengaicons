import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SkipForwardFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.459 5.783a1 1 0 1 1 2 0v22a1 1 0 0 1-2 0V17.414L8.227 28.297a.5.5 0 0 1-.767-.423V5.691a.5.5 0 0 1 .767-.422L25.46 16.15V5.783Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SkipForwardFill.displayName = "SkipForwardFill";

export default SkipForwardFill;
