import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlusFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M17.96 9.28a1 1 0 1 0-2 0v6.003H9.957a1 1 0 1 0 0 2h6.003v6.003a1 1 0 1 0 2 0v-6.003h6.003a1 1 0 0 0 0-2H17.96V9.28Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

PlusFill.displayName = "PlusFill";

export default PlusFill;
