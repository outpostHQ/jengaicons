import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextHSixRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6 9.137v11.765M16.196 15.02H6M16.196 9.137v11.765M20.878 18.744l3.161-5.293M23.255 22.863a2.745 2.745 0 1 0 0-5.49 2.745 2.745 0 0 0 0 5.49Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

TextHSixRegular.displayName = "TextHSixRegular";

export default TextHSixRegular;
