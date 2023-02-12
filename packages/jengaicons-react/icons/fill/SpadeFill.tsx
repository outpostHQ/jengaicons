import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpadeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.695 4.457a.472.472 0 0 1 .53 0c1.722 1.147 11.273 7.752 11.273 13.21a6 6 0 0 1-9.85 4.602l1.785 5.356a.5.5 0 0 1-.475.658h-5.997a.5.5 0 0 1-.474-.658l1.785-5.356a6 6 0 0 1-9.85-4.601c0-5.46 9.55-12.064 11.273-13.211Z"
      />
    </svg>
  );
});

SpadeFill.displayName = "SpadeFill";

export default SpadeFill;
