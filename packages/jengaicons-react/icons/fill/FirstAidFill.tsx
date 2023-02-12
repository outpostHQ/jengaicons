import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FirstAidFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M13.016 12.171V5.395a1 1 0 0 1 1-1h6.168a1 1 0 0 1 1 1v6.776h6.776a1 1 0 0 1 1 1v5.888a1 1 0 0 1-1 1h-6.776v7.112a1 1 0 0 1-1 1h-6.168a1 1 0 0 1-1-1v-7.112H5.96a1 1 0 0 1-1-1v-5.888a1 1 0 0 1 1-1h7.056Z"
      />
    </svg>
  );
});

FirstAidFill.displayName = "FirstAidFill";

export default FirstAidFill;
