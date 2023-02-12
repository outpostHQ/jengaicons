import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StrategyFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M19.769 10.797a1 1 0 0 1 0-1.414l4.243-4.243a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1-1.415 1.414l-2.51-2.511v7.446a1 1 0 0 1-1 1H8.503v4.875a1 1 0 0 1-.052.317 2.5 2.5 0 1 1-1.908-.033 1 1 0 0 1-.04-.284v-5.875a1 1 0 0 1 1-1h16.24V8.237l-2.56 2.56a1 1 0 0 1-1.415 0Zm-9.31-5.95a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Zm9.967 16.164a1 1 0 1 0-1.414 1.415l1.793 1.793-1.793 1.792a1 1 0 0 0 1.414 1.415l1.793-1.793 1.793 1.793a1 1 0 0 0 1.414-1.415l-1.793-1.793 1.793-1.792a1 1 0 0 0-1.414-1.415l-1.793 1.793-1.793-1.793Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

StrategyFill.displayName = "StrategyFill";

export default StrategyFill;
