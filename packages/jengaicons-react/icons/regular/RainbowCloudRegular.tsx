import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RainbowCloudRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M4 21.146v-1.714a10.286 10.286 0 0 1 17.454-7.371"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7.429 21.146v-1.714a6.857 6.857 0 0 1 10.918-5.529"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.857 21.146v-1.714a3.429 3.429 0 0 1 3.43-3.429c.266 0 .533.032.792.097M19.11 17.487a3.233 3.233 0 0 0-4.006 2.726 3.232 3.232 0 0 0 3.203 3.636h4.035c1.784 0 3.64-.439 4.735-1.846v0a4.616 4.616 0 1 0-8.309-2.77"
        />
      </svg>
    );
  }
);

RainbowCloudRegular.displayName = "RainbowCloudRegular";

export default RainbowCloudRegular;
