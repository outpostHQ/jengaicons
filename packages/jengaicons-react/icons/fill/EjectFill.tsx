import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EjectFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      <rect
        x="4.96"
        y="23.07"
        width="24"
        height="5.455"
        rx=".5"
        fill="#1C1B1F"
      />
      <path
        d="M16.427 5.478a.5.5 0 0 1 .756 0l10.75 12.4a.5.5 0 0 1-.378.828h-21.5a.5.5 0 0 1-.378-.828l10.75-12.4Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

EjectFill.displayName = "EjectFill";

export default EjectFill;
