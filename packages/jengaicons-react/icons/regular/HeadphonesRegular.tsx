import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HeadphonesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28 17.925V26.984h-6.117v-9.059H28Zm0 0A11.911 11.911 0 0 0 16 6.016a11.91 11.91 0 0 0-12 11.91m0 0v9.058h5.935v-9.059H4Z"
        />
      </svg>
    );
  }
);

HeadphonesRegular.displayName = "HeadphonesRegular";

export default HeadphonesRegular;
