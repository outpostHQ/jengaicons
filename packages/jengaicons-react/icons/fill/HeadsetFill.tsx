import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HeadsetFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.003 15.743v8.336h-5.629v-8.336h5.629A10.96 10.96 0 0 0 16.96 4.783a10.96 10.96 0 0 0-11.043 10.96h5.462v8.336H5.917v-8.336A10.96 10.96 0 0 1 16.96 4.783a10.96 10.96 0 0 1 11.043 10.96Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M28.003 15.743v8.336h-5.629v-8.336h5.629Zm0 0A10.96 10.96 0 0 0 16.96 4.783a10.96 10.96 0 0 0-11.043 10.96m0 0v8.336h5.462v-8.336H5.917Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.748 28.783h7.255a3 3 0 0 0 3-3V21.68"
      />
    </svg>
  );
});

HeadsetFill.displayName = "HeadsetFill";

export default HeadsetFill;
