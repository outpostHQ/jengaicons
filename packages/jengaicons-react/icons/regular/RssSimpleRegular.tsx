import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RssSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.463 6A18.537 18.537 0 0 1 26 24.537M7.463 14.78a9.756 9.756 0 0 1 9.756 9.757"
        />
        <path
          fill={color || "#000000"}
          d="M7.463 26a1.463 1.463 0 1 0 0-2.927 1.463 1.463 0 0 0 0 2.927Z"
        />
      </svg>
    );
  }
);

RssSimpleRegular.displayName = "RssSimpleRegular";

export default RssSimpleRegular;
