import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GaugeRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 7.692v3.693M4.409 17.51l3.566.955M27.591 17.51l-3.566.955M13.167 24.308l7.89-10.284"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 19.692c0-6.627 5.373-12 12-12s12 5.373 12 12v4.616H4v-4.616Z"
      />
    </svg>
  );
});

GaugeRegular.displayName = "GaugeRegular";

export default GaugeRegular;
