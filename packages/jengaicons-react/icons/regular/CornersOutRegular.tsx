import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CornersOutRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.131 4.587H4.087v6.044M22.044 4.587h6.043v6.044M4.087 22.544v6.043h6.044M28.087 22.544v6.043h-6.043"
        />
      </svg>
    );
  }
);

CornersOutRegular.displayName = "CornersOutRegular";

export default CornersOutRegular;
