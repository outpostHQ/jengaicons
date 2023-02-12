import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TabsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M2.704 11.997a1 1 0 0 1 1-1h17.028a1 1 0 0 1 1 1v7.572h3.198v-6.572h-.714a1 1 0 1 1 0-2h1.714a1 1 0 0 1 1 1v7.572h2.286v-6.572H28.5a1 1 0 1 1 0-2h1.715a1 1 0 0 1 1 1v8.572a1 1 0 0 1-1 1H3.704a1 1 0 0 1-1-1v-8.572Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

TabsFill.displayName = "TabsFill";

export default TabsFill;
