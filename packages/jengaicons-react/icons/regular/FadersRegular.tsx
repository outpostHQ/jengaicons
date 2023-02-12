import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FadersRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 15.5v12M16 5.5v6M25 25.5v2M25 5.5v16M28 21.5h-6M7 21.5v6M7 5.5v12M4 17.5h6M19 11.5h-6"
        />
      </svg>
    );
  }
);

FadersRegular.displayName = "FadersRegular";

export default FadersRegular;
