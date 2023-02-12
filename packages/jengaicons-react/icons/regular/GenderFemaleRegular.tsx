import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GenderFemaleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM16 20.5v8M11.556 24.945h8.888"
        />
      </svg>
    );
  }
);

GenderFemaleRegular.displayName = "GenderFemaleRegular";

export default GenderFemaleRegular;
