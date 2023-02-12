import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FishRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.66 10.489a1.35 1.35 0 1 0 0-2.702 1.35 1.35 0 0 0 0 2.702Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M24.072 19.483h-.26a5.404 5.404 0 0 1-5.403-5.403 5.403 5.403 0 0 1-5.403-5.393 1.999 1.999 0 0 1 .011-.259"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.101 17.828 4 20.395l6.304 1.801 1.801 6.304 2.567-6.101C30.252 22.027 28.18 8.564 27.55 5.637a.924.924 0 0 0-.687-.687c-2.927-.63-16.39-2.702-16.762 12.878Z"
      />
    </svg>
  );
});

FishRegular.displayName = "FishRegular";

export default FishRegular;
