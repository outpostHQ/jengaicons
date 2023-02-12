import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CameraFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 9.282a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1h-4.419a1 1 0 0 1-.828-.44l-1.436-2.12a1 1 0 0 0-.828-.438h-6.938a1 1 0 0 0-.828.44L11.25 8.842a1 1 0 0 1-.828.44H5.96Zm7.5 8.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5-5.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

CameraFill.displayName = "CameraFill";

export default CameraFill;
