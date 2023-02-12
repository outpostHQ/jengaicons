import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrademarkRegisteredRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12ZM17.516 17.44 20 21"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M13 17.483h3.758A3.242 3.242 0 0 0 20 14.242v0A3.242 3.242 0 0 0 16.758 11h-3.723a.035.035 0 0 0-.035.035V21"
        />
      </svg>
    );
  }
);

TrademarkRegisteredRegular.displayName = "TrademarkRegisteredRegular";

export default TrademarkRegisteredRegular;
