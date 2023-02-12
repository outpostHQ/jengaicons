import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StackOverflowLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M11.748 23.213h10.424M12.66 16.333 22.72 19.03M15.305 9.923l9.03 5.212M19.54 4.424l7.362 7.362"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M6.537 21.128v6.796a.5.5 0 0 0 .5.5h19.847a.5.5 0 0 0 .5-.5v-6.796"
        />
      </svg>
    );
  }
);

StackOverflowLogosvgFill.displayName = "StackOverflowLogosvgFill";

export default StackOverflowLogosvgFill;
