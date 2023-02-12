import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FireRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M22.015 19.607a6.107 6.107 0 0 1-5.079 5.078"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.447 9.941c-1.802 2.715-3.276 5.828-3.276 8.73a9.83 9.83 0 1 0 19.658 0c0-6.085-4.212-10.766-7.63-14.171l-4.071 8.554-4.68-3.113Z"
      />
    </svg>
  );
});

FireRegular.displayName = "FireRegular";

export default FireRegular;
