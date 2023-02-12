import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ParachuteFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.114 5.95a12.52 12.52 0 0 1 21.373 8.853 1 1 0 0 1-.689.95l-10.83 8.079v2.451h.92a1 1 0 1 1 0 2h-3.84a1 1 0 0 1 0-2h.92v-2.405l-11.129-8.21a1 1 0 0 1-.391-.98A12.52 12.52 0 0 1 8.114 5.95Zm13.368 9.853h3.905l-6.965 5.195 3.06-5.195Zm.26-2h5.698a10.52 10.52 0 0 0-9.23-9.446c2.493 2.634 3.359 6.707 3.532 9.446ZM15.876 4.34c-1.62 1.802-3.588 5.101-3.68 9.463H6.495a10.52 10.52 0 0 1 9.381-9.463Zm-3.353 11.463 3.125 5.354-7.257-5.354h4.132Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ParachuteFill.displayName = "ParachuteFill";

export default ParachuteFill;
