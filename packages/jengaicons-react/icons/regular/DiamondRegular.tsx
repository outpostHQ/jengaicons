import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiamondRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.435 17.051a1.487 1.487 0 0 1 0-2.102L14.95 4.435c.58-.58 1.522-.58 2.102 0L27.565 14.95c.58.58.58 1.522 0 2.102L17.05 27.565c-.58.58-1.522.58-2.102 0L4.435 17.05Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

DiamondRegular.displayName = "DiamondRegular";

export default DiamondRegular;
