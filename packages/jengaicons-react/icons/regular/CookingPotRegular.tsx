import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CookingPotRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.8 6.4v3.2M16 6.4v3.2M19.2 6.4v3.2M28 14.4l-3.2 2.4M4 14.4l3.2 2.4"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7.2 12.8h17.6v10.8a2 2 0 0 1-2 2H9.2a2 2 0 0 1-2-2V12.8Z"
        />
      </svg>
    );
  }
);

CookingPotRegular.displayName = "CookingPotRegular";

export default CookingPotRegular;
