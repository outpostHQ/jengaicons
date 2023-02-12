import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AirplaneInFlightRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.255 24.06h15.49M8 18.897h20v-3.033a3 3 0 0 0-3-3h-6.36L14.292 7.94h-3.327l1.73 4.924H9.19l-1.774-2.485H4v4.518a4 4 0 0 0 4 4Z"
        />
      </svg>
    );
  }
);

AirplaneInFlightRegular.displayName = "AirplaneInFlightRegular";

export default AirplaneInFlightRegular;
