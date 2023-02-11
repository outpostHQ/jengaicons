import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GhostFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M27.757 27.43a.5.5 0 0 0 .853-.354V15.933c0-6.434-5.216-11.65-11.65-11.65S5.31 9.499 5.31 15.933v11.143a.5.5 0 0 0 .854.353l2.676-2.676a.5.5 0 0 1 .707 0l3.176 3.176a.5.5 0 0 0 .707 0l3.177-3.176a.5.5 0 0 1 .707 0l3.176 3.176a.5.5 0 0 0 .707 0l3.176-3.176a.5.5 0 0 1 .707 0l2.677 2.676Zm-14.32-11.147a1.51 1.51 0 1 0 0-3.02 1.51 1.51 0 0 0 0 3.02Zm8.556-1.51a1.51 1.51 0 1 1-3.02 0 1.51 1.51 0 0 1 3.02 0Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

GhostFill.displayName = "GhostFill";

export default GhostFill;
