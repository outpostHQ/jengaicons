import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EjectFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      <rect
        width="24"
        height="5.455"
        x="4.96"
        y="23.07"
        fill={color || "#000000"}
        rx=".5"
      />
      <path
        fill={color || "#000000"}
        d="M16.427 5.478a.5.5 0 0 1 .756 0l10.75 12.4a.5.5 0 0 1-.378.828h-21.5a.5.5 0 0 1-.378-.828l10.75-12.4Z"
      />
    </svg>
  );
});

EjectFill.displayName = "EjectFill";

export default EjectFill;
