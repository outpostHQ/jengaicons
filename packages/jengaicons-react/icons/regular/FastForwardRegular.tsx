import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FastForwardRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.625 16.5 4 9.28v14.44l11.625-7.22ZM28 16.5 16.375 9.28v14.44L28 16.5Z"
        />
      </svg>
    );
  }
);

FastForwardRegular.displayName = "FastForwardRegular";

export default FastForwardRegular;
