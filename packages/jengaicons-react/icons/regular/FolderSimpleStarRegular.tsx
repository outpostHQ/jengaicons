import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleStarRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 10.077v15.538h9.57M16 10.077h12v2.841"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16 10.077-4-3.692H4v3.692"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m20.27 18.457 1.775-3.82 1.504 3.82 4.451.241-3.338 3.038.992 3.88-3.609-2.256-3.91 2.255 1.264-3.88L16 18.699l4.27-.24Z"
        />
      </svg>
    );
  }
);

FolderSimpleStarRegular.displayName = "FolderSimpleStarRegular";

export default FolderSimpleStarRegular;
