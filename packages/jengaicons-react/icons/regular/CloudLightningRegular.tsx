import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudLightningRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m16 28.5 2.922-4.38h-5.589l2.923-4.379M11.989 9.238a5.335 5.335 0 1 0-1.326 10.503h8.208c1.936 0 3.878-.522 5.246-1.893.355-.356.707-.745 1.026-1.155a7.621 7.621 0 1 0-13.718-4.573"
        />
      </svg>
    );
  }
);

CloudLightningRegular.displayName = "CloudLightningRegular";

export default CloudLightningRegular;
