import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AsteriskSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 4.588v12.616M4 13.305l12 3.9M8.588 27.412 16 17.204M23.412 27.412 16 17.204M28 13.305l-12 3.9"
        />
      </svg>
    );
  }
);

AsteriskSimpleRegular.displayName = "AsteriskSimpleRegular";

export default AsteriskSimpleRegular;
