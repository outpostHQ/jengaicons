import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PushPinSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 20.32V28M8.32 4h15.36M5.44 20.32h21.12M7.36 20.32 10.24 4M21.76 4l2.88 16.32"
        />
      </svg>
    );
  }
);

PushPinSimpleRegular.displayName = "PushPinSimpleRegular";

export default PushPinSimpleRegular;
