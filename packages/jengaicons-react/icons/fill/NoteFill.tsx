import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NoteFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 4.283h22a1 1 0 0 1 1 1v15.524a1 1 0 0 1-.358.767l-7.738 6.476a1 1 0 0 1-.642.233H5.96a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1Zm14.358 17.665v4.895l7.08-5.895h-6.08a1 1 0 0 0-1 1ZM12.596 10.92a1 1 0 1 0 0 2h8.727a1 1 0 0 0 0-2h-8.727Zm0 4.364a1 1 0 1 0 0 2h8.727a1 1 0 0 0 0-2h-8.727Zm-1 5.364a1 1 0 0 1 1-1h4.364a1 1 0 0 1 0 2h-4.364a1 1 0 0 1-1-1Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

NoteFill.displayName = "NoteFill";

export default NoteFill;
