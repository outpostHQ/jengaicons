import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LinkRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.24 8.396 17.9 5.734a5.915 5.915 0 1 1 8.365 8.365L22.464 17.9a5.916 5.916 0 0 1-8.365 0"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.76 23.604 14.1 26.266A5.916 5.916 0 1 1 5.734 17.9l3.802-3.802a5.914 5.914 0 0 1 8.365 0"
      />
    </svg>
  );
});

LinkRegular.displayName = "LinkRegular";

export default LinkRegular;
