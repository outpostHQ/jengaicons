import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ButterflyRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 24.432V13.278a10 10 0 0 0-3.92-7.94L10.985 4.5"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 24.432V13.278a10 10 0 0 1 3.92-7.94l1.095-.838"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 14.275a5.519 5.519 0 1 1 11.037 0 5.519 5.519 0 0 1-5.518 5.52H16v-5.52Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 14.275a5.519 5.519 0 1 0-11.037 0 5.519 5.519 0 0 0 5.518 5.52H16v-5.52Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 24.147a4.353 4.353 0 1 0 8.706 0 4.353 4.353 0 0 0-4.353-4.353H16v4.353ZM16 24.147a4.353 4.353 0 0 1-8.706 0 4.353 4.353 0 0 1 4.353-4.353H16v4.353Z"
        />
      </svg>
    );
  }
);

ButterflyRegular.displayName = "ButterflyRegular";

export default ButterflyRegular;
