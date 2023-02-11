import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CactusFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.652 26.86h6.462a1 1 0 1 1 0 2H6.806a1 1 0 0 1 0-2h6.462v-8.692h-1.385a6.923 6.923 0 0 1-6.923-6.923 2.32 2.32 0 0 1 2.308-2.308 2.32 2.32 0 0 1 2.307 2.308 2.32 2.32 0 0 0 2.308 2.307h1.385V9.398a3.692 3.692 0 0 1 7.384 0v8.77h1.385a2.319 2.319 0 0 0 2.308-2.308 2.319 2.319 0 0 1 2.307-2.308 2.319 2.319 0 0 1 2.308 2.308 6.923 6.923 0 0 1-6.923 6.923h-1.385v4.077Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

CactusFill.displayName = "CactusFill";

export default CactusFill;
