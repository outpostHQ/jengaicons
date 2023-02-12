import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const JeepRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4 12.571h24M17.714 16v5.143M14.286 16v5.143"
      />
      <path
        fill={color || "#000000"}
        d="M10 17.714a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571ZM22 17.714a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.714 12.571h20.572v8.572H5.714V12.57Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.958 6.571h18.084l1.458 6h-21l1.458-6Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.714 21.143v4.285h4.714v-4.285M21.571 21.143v4.285h4.715v-4.285"
      />
    </svg>
  );
});

JeepRegular.displayName = "JeepRegular";

export default JeepRegular;
