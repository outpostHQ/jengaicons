import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LayoutFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M3.895 4.979a.5.5 0 0 0-.5.5v4.227a.5.5 0 0 0 .5.5h26.13a.5.5 0 0 0 .5-.5V5.479a.5.5 0 0 0-.5-.5H3.895Zm11.18 9.281a.5.5 0 0 1 .5-.5h14.45a.5.5 0 0 1 .5.5v12.827a.5.5 0 0 1-.5.5h-14.45a.5.5 0 0 1-.5-.5V14.261Zm-11.68 0a.5.5 0 0 1 .5-.5h6.966a.5.5 0 0 1 .5.5v12.827a.5.5 0 0 1-.5.5H3.895a.5.5 0 0 1-.5-.5V14.261Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

LayoutFill.displayName = "LayoutFill";

export default LayoutFill;
