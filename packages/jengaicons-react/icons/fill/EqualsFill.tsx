import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EqualsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M6.96 11.647a1 1 0 1 0 0 2h20a1 1 0 0 0 0-2h-20Zm0 7.272a1 1 0 1 0 0 2h20a1 1 0 0 0 0-2h-20Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

EqualsFill.displayName = "EqualsFill";

export default EqualsFill;
