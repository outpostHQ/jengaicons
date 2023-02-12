import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LampRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 18.593v6.915M12.543 25.508h6.915M23.78 18.593v4.322"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.186 6.492h13.628L28 18.593H4L9.186 6.492Z"
      />
    </svg>
  );
});

LampRegular.displayName = "LampRegular";

export default LampRegular;
