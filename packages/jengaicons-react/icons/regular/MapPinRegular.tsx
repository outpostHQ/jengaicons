import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MapPinRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 16.923a3.692 3.692 0 1 0 0-7.385 3.692 3.692 0 0 0 0 7.385Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.23 13.23C25.23 21.539 16 28 16 28s-9.23-6.462-9.23-14.77a9.23 9.23 0 1 1 18.46 0v0Z"
        />
      </svg>
    );
  }
);

MapPinRegular.displayName = "MapPinRegular";

export default MapPinRegular;
