import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiamondsFourFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.02 8.18a1 1 0 0 0 0 1.415l3.19 3.19a1 1 0 0 0 1.415 0l3.19-3.19a1 1 0 0 0 0-1.415l-3.19-3.19a1 1 0 0 0-1.415 0l-3.19 3.19Zm0 14.791a1 1 0 0 0 0 1.414l3.19 3.19a1 1 0 0 0 1.415 0l3.19-3.19a1 1 0 0 0 0-1.414l-3.19-3.19a1 1 0 0 0-1.415 0l-3.19 3.19Zm7.438-5.945a1 1 0 0 1 0-1.414l3.19-3.19a1 1 0 0 1 1.415 0l3.19 3.19a1 1 0 0 1 0 1.414l-3.19 3.19a1 1 0 0 1-1.415 0l-3.19-3.19ZM5.667 15.612a1 1 0 0 0 0 1.414l3.19 3.19a1 1 0 0 0 1.415 0l3.19-3.19a1 1 0 0 0 0-1.414l-3.19-3.19a1 1 0 0 0-1.415 0l-3.19 3.19Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

DiamondsFourFill.displayName = "DiamondsFourFill";

export default DiamondsFourFill;
