import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SidebarElegantRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11 6.5v20M28 13.71V26.5H4v-20h15.17"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m25.55 4.405.797 2.455h2.581L26.84 8.377l.798 2.454-2.088-1.517-2.088 1.518.797-2.455-2.088-1.517h2.581l.798-2.455ZM18.445 13.96l.461 1.42h1.492l-1.207.876.461 1.42-1.207-.878-1.207.877.461-1.419-1.206-.876h1.491l.461-1.42Z"
        />
      </svg>
    );
  }
);

SidebarElegantRegular.displayName = "SidebarElegantRegular";

export default SidebarElegantRegular;
