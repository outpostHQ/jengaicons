import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UmbrellaSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 17.037c0-6.627 5.373-12 12-12s12 5.373 12 12v.732H4v-.732Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16.01 17.898v7.297a2.768 2.768 0 0 0 2.768 2.768v0a2.768 2.768 0 0 0 2.768-2.768v-.252"
        />
      </svg>
    );
  }
);

UmbrellaSimpleRegular.displayName = "UmbrellaSimpleRegular";

export default UmbrellaSimpleRegular;
