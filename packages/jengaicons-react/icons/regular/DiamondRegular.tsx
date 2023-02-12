import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiamondRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.435 17.051a1.487 1.487 0 0 1 0-2.102L14.95 4.435c.58-.58 1.522-.58 2.102 0L27.565 14.95c.58.58.58 1.522 0 2.102L17.05 27.565c-.58.58-1.522.58-2.102 0L4.435 17.05Z"
        />
      </svg>
    );
  }
);

DiamondRegular.displayName = "DiamondRegular";

export default DiamondRegular;
