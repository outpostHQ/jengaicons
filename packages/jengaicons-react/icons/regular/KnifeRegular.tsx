import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const KnifeRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m18.133 11.912 6.174 6.174S16 29.162 4 26.393L24.06 5.84a2.308 2.308 0 1 1 3.264 3.263l-5.812 6.19"
      />
    </svg>
  );
});

KnifeRegular.displayName = "KnifeRegular";

export default KnifeRegular;
