import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HandPalmRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.421 16.056V6.722c0-1.227.995-2.222 2.223-2.222v0c1.227 0 2.222.995 2.222 2.222v9.334"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.421 16.056v-5.707a2.222 2.222 0 0 0-4.444 0v9.422c0 4.821 3.946 8.729 8.814 8.729a8.824 8.824 0 0 0 7.791-4.644l3.199-6a2.222 2.222 0 1 0-3.96-2.017l-1.566 3.046c-.24.467-.945.296-.945-.228V8.779a2.222 2.222 0 1 0-4.444 0v7.277"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M15.548 22.5c0-1.845 1.858-3.34 4.15-3.34"
        />
      </svg>
    );
  }
);

HandPalmRegular.displayName = "HandPalmRegular";

export default HandPalmRegular;
