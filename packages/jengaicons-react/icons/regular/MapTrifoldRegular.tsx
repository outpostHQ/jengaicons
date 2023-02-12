import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MapTrifoldRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12 5 4 7v18l8-2 8 4 8-2V7l-8 2-7.998-3.998M11.968 5.326v17.652M20 8.895v17.651"
        />
      </svg>
    );
  }
);

MapTrifoldRegular.displayName = "MapTrifoldRegular";

export default MapTrifoldRegular;
