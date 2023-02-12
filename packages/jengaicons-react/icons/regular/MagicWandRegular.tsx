import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MagicWandRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.23 16v5.538M22.461 18.77H28M10 5.846v4.616M7.692 8.154h4.615M19.692 22.462v3.692M17.846 24.308h3.692M16.923 10.461l3.692 3.693"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m22.175 5.142 3.882 3.882L8.124 26.956l-3.882-3.882z"
        />
      </svg>
    );
  }
);

MagicWandRegular.displayName = "MagicWandRegular";

export default MagicWandRegular;
