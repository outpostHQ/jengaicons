import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SidebarFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 5.533a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-20a1 1 0 0 0-1-1h-24Zm1 14h2a1 1 0 0 0 0-2h-2v-2h2a1 1 0 0 0 0-2h-2v-2h2a1 1 0 0 0 0-2h-2v-2h6v18h-6v-6Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

SidebarFill.displayName = "SidebarFill";

export default SidebarFill;
