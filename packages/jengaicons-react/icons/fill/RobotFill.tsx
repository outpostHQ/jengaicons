import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RobotFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.96 8.3a2.083 2.083 0 1 0-2 0v2.126h-6a5 5 0 0 0-5 5v7.752a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-7.752a5 5 0 0 0-5-5h-6V8.3Zm-5 8.252a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6.5 8a1 1 0 0 0 0-2h-5a1 1 0 1 0 0 2h5Zm3-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

RobotFill.displayName = "RobotFill";

export default RobotFill;
