import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HandGrabbingRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeWidth="2"
          d="M16 13.5v-6a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v8.4M22 13.5v-6a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v6M4 16.2V15a3.6 3.6 0 0 1 3.6-3.6h1.8M28 17.1V9.9a3 3 0 0 0-6 0v3.6m6 3.053C28 23.257 23.342 28.5 16 28.5c-7.855 0-12-5.897-12-12.6"
        />
      </svg>
    );
  }
);

HandGrabbingRegular.displayName = "HandGrabbingRegular";

export default HandGrabbingRegular;
