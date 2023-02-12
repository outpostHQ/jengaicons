import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BoundingBoxFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.233 21.738v-10.91M22.415 25.01h-10.91M25.687 10.828v10.91M11.505 7.556h10.91"
        />
        <rect
          width="6.545"
          height="6.545"
          x="4.96"
          y="4.283"
          fill={color || "#000000"}
          rx=".5"
        />
        <rect
          width="6.545"
          height="6.545"
          x="4.96"
          y="21.737"
          fill={color || "#000000"}
          rx=".5"
        />
        <rect
          width="6.545"
          height="6.545"
          x="22.415"
          y="4.283"
          fill={color || "#000000"}
          rx=".5"
        />
        <rect
          width="6.545"
          height="6.545"
          x="22.415"
          y="21.737"
          fill={color || "#000000"}
          rx=".5"
        />
      </svg>
    );
  }
);

BoundingBoxFill.displayName = "BoundingBoxFill";

export default BoundingBoxFill;
