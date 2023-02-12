import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MoonFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.691 20.683c.132-.367-.212-.715-.594-.638a12.21 12.21 0 0 1-14.4-14.4c.078-.381-.27-.725-.637-.593a12.224 12.224 0 1 0 15.631 15.63Z"
      />
    </svg>
  );
});

MoonFill.displayName = "MoonFill";

export default MoonFill;
