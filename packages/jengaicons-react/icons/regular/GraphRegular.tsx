import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GraphRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.803 24.128a1.803 1.803 0 1 0 0-3.606 1.803 1.803 0 0 0 0 3.606ZM12.917 16.887a1.803 1.803 0 1 0 0-3.606 1.803 1.803 0 0 0 0 3.606ZM26.197 11.478a1.803 1.803 0 1 0 0-3.606 1.803 1.803 0 0 0 0 3.606ZM20.345 24.076a1.803 1.803 0 1 0 0-3.606 1.803 1.803 0 0 0 0 3.606ZM7.095 21.054l4.493-4.493m13.814-5.18-3.872 9.344m-7.27-4.275 4.603 4.604"
      />
    </svg>
  );
});

GraphRegular.displayName = "GraphRegular";

export default GraphRegular;
