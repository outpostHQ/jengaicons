import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FadersFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M25.96 4.783a1 1 0 0 1 1 1v15h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h2v-15a1 1 0 0 1 1-1Zm-9 0a1 1 0 0 1 1 1v5h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h2v-5a1 1 0 0 1 1-1Zm0 10a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0v-12a1 1 0 0 1 1-1Zm10 11a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0v-2Zm-19-5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm1-15a1 1 0 1 0-2 0v11h-2a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-2v-11Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

FadersFill.displayName = "FadersFill";

export default FadersFill;
