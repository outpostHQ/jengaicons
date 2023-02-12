import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const KnifesvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m19.093 12.195 6.174 6.174S16.96 29.445 4.96 26.676L25.02 6.122a2.308 2.308 0 1 1 3.264 3.263l-5.812 6.19"
      />
      <path
        fill={color || "#000000"}
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25.769 5.621c-.28.116-.534.286-.749.5l-5.948 6.166 3.4 3.288 5.812-6.19a2.307 2.307 0 0 0-2.515-3.764Z"
      />
    </svg>
  );
});

KnifesvgFill.displayName = "KnifesvgFill";

export default KnifesvgFill;
