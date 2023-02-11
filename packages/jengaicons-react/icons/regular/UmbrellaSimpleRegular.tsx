import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const UmbrellaSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="M4 17.037c0-6.627 5.373-12 12-12s12 5.373 12 12v.732H4v-.732Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16.01 17.898v7.297a2.768 2.768 0 0 0 2.768 2.768v0a2.768 2.768 0 0 0 2.768-2.768v-.252"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

UmbrellaSimpleRegular.displayName = "UmbrellaSimpleRegular";

export default UmbrellaSimpleRegular;
