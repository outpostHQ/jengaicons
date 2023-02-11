import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MegaphoneSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m4 5.832 24 6.997v5.33L4 25.158V5.832Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M19.995 10.675v15.493h3.998V20.17"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

MegaphoneSimpleRegular.displayName = "MegaphoneSimpleRegular";

export default MegaphoneSimpleRegular;
