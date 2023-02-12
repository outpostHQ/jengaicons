import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaletteFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.96 16.436c.008.932-.092 1.863-.298 2.772a2.999 2.999 0 0 1-2.926 2.33H19.96a3 3 0 0 0-3 3v.488a3 3 0 0 1-3.997 2.83A12.002 12.002 0 0 1 16.837 4.54c6.603-.066 12.067 5.293 12.122 11.897Zm-12-4.897a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-5.629 3.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9.758-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

PaletteFill.displayName = "PaletteFill";

export default PaletteFill;
