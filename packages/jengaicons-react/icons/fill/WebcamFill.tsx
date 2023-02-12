import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WebcamFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.959 23.728a9.001 9.001 0 0 0-.999-17.945 9 9 0 0 0-.999 17.945l-.001.055v3h-10a1 1 0 1 0 0 2h22a1 1 0 0 0 0-2h-10v-3c0-.018 0-.037-.002-.055Zm-.999-4.945a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

WebcamFill.displayName = "WebcamFill";

export default WebcamFill;
