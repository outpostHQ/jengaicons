import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WatchRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M16 24.808a8.308 8.308 0 1 0 0-16.616 8.308 8.308 0 0 0 0 16.616Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 11.885V16.5h4.615M20.615 9.592 19.692 4.5h-7.384l-.923 5.092M20.615 23.408l-.923 5.092h-7.384l-.923-5.092"
      />
    </svg>
  );
});

WatchRegular.displayName = "WatchRegular";

export default WatchRegular;
