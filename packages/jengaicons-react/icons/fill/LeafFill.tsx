import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LeafFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.565 11.764 7.714 24.614C2.188 14.052 10.911 3.802 28.884 4.859c1.058 17.974-9.192 26.697-19.756 21.171L21.98 13.178a1 1 0 0 0-1.415-1.414ZM7.707 24.622l-3.454 3.454a1 1 0 1 0 1.414 1.414l3.454-3.454-1.414-1.414Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

LeafFill.displayName = "LeafFill";

export default LeafFill;
