import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BugBeetleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.457 17.865H28M4 17.865h3.543M4 21.865h3.806M4 13.865h24M16 17.865v9.138M24.194 21.865H28M7.806 4.997l3 3M24.232 4.997l-3 3"
        />
        <rect
          width="16.388"
          height="20.276"
          x="7.806"
          y="6.727"
          stroke={color || "#000000"}
          strokeWidth="2"
          rx="8.194"
        />
      </svg>
    );
  }
);

BugBeetleRegular.displayName = "BugBeetleRegular";

export default BugBeetleRegular;
