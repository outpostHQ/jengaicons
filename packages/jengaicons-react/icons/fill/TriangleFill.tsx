import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TriangleFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.094 7.39a1 1 0 0 1 1.732 0l10.268 17.785a1 1 0 0 1-.866 1.5H6.692a1 1 0 0 1-.866-1.5L16.094 7.391Z"
      />
    </svg>
  );
});

TriangleFill.displayName = "TriangleFill";

export default TriangleFill;
