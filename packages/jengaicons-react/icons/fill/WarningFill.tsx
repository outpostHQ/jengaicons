import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WarningFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.094 7.39a1 1 0 0 1 1.732 0l10.268 17.785a1 1 0 0 1-.866 1.5H6.692a1 1 0 0 1-.866-1.5L16.094 7.391Zm.866 5.81a1 1 0 0 1 1 1v4.617a1 1 0 0 1-2 0V14.2a1 1 0 0 1 1-1Zm1.385 9.771a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

WarningFill.displayName = "WarningFill";

export default WarningFill;
