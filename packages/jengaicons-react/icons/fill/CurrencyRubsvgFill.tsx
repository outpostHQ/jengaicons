import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyRubsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.778 21.738h10M12.415 26.283v-20h6.818a5.909 5.909 0 1 1 0 11.818H8.778"
        />
      </svg>
    );
  }
);

CurrencyRubsvgFill.displayName = "CurrencyRubsvgFill";

export default CurrencyRubsvgFill;
