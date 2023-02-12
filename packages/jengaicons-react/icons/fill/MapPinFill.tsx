import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MapPinFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 28.283s9.23-6.462 9.23-14.77a9.23 9.23 0 1 0-18.461 0c0 8.308 9.23 14.77 9.23 14.77Zm3.692-14.77a3.692 3.692 0 1 1-7.384 0 3.692 3.692 0 0 1 7.384 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

MapPinFill.displayName = "MapPinFill";

export default MapPinFill;
