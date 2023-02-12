import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SparkleFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M21.849 3.783a1 1 0 0 1 1 1V6.45h1.667a1 1 0 1 1 0 2h-1.667v1.666a1 1 0 1 1-2 0V8.45h-1.667a1 1 0 1 1 0-2h1.667V4.783a1 1 0 0 1 1-1Zm6.333 7.222a1 1 0 1 0-2 0v.778h-.778a1 1 0 0 0 0 2h.778v.778a1 1 0 1 0 2 0v-.778h.778a1 1 0 0 0 0-2h-.778v-.778Zm-12.975-.51a.5.5 0 0 0-.938 0l-2.092 5.654a.5.5 0 0 1-.296.295l-5.654 2.092a.5.5 0 0 0 0 .938l5.654 2.092a.5.5 0 0 1 .296.296l2.092 5.654a.5.5 0 0 0 .938 0l2.092-5.654a.5.5 0 0 1 .295-.296l5.654-2.092a.5.5 0 0 0 0-.938l-5.654-2.092a.5.5 0 0 1-.295-.295l-2.092-5.655Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

SparkleFill.displayName = "SparkleFill";

export default SparkleFill;
