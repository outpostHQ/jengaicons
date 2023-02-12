import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ProhibitInsetFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.628-5.373 12-12 12-6.628 0-12-5.372-12-12 0-6.627 5.372-12 12-12 6.627 0 12 5.373 12 12Zm-14.829-4.242a1 1 0 0 0-1.414 1.414l7.071 7.071a1 1 0 0 0 1.415-1.414l-7.072-7.071Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ProhibitInsetFill.displayName = "ProhibitInsetFill";

export default ProhibitInsetFill;
