import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SidebarSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M3.96 6.533a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-24a1 1 0 0 1-1-1v-20Zm2 1h5v18h-5v-18Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SidebarSimpleFill.displayName = "SidebarSimpleFill";

export default SidebarSimpleFill;
