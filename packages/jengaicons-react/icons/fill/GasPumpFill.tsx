import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GasPumpFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.648 7.132a1 1 0 0 0-1-1H8.728a1 1 0 0 0-1 1v18.302H4.96a1 1 0 1 0 0 2h18.456a1 1 0 1 0 0-2h-2.768v-10.02h1.892c.984 0 1.782.798 1.782 1.782v3.744a2.82 2.82 0 0 0 5.638 0V10.855a1 1 0 0 0-.293-.707l-2.81-2.81a1 1 0 1 0-1.414 1.414l2.517 2.517v9.67a.82.82 0 1 1-1.638 0v-3.743a3.782 3.782 0 0 0-3.782-3.782h-1.892V7.132Zm-9.229 6.305a1 1 0 1 0 0 2h5.537a1 1 0 0 0 0-2H11.42Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

GasPumpFill.displayName = "GasPumpFill";

export default GasPumpFill;
