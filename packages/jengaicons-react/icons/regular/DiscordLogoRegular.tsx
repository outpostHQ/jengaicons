import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiscordLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          d="M11.88 19.429a1.48 1.48 0 1 0 0-2.959 1.48 1.48 0 0 0 0 2.959ZM19.768 19.429a1.48 1.48 0 1 0 0-2.959 1.48 1.48 0 0 0 0 2.959Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.217 10.06a21.612 21.612 0 0 1 6.607-.985c2.24-.016 4.468.317 6.606.986M22.43 21.894a21.614 21.614 0 0 1-6.606.986 21.613 21.613 0 0 1-6.607-.986"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m12.518 9.254-1.45-3.7-4.86 1.669L2 22.093c1.402 1.233 5.034 3.83 8.342 4.352l2.176-3.554m7.036 0 1.886 3.555c1.959-.557 6.413-2.206 8.56-4.353l-4.57-14.87-5.005-1.669-1.45 3.7"
        />
      </svg>
    );
  }
);

DiscordLogoRegular.displayName = "DiscordLogoRegular";

export default DiscordLogoRegular;
