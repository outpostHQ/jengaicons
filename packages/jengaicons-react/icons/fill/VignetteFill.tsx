import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VignetteFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 5.533a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-20a1 1 0 0 0-1-1h-24Zm1 20v-18h22v18h-22Zm19-9c0 3.314-3.582 6-8 6s-8-2.686-8-6 3.582-6 8-6 8 2.686 8 6Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

VignetteFill.displayName = "VignetteFill";

export default VignetteFill;
