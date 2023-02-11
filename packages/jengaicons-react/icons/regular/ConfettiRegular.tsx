import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ConfettiRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.729 10.573s0-2.817 2.817-2.817 2.817-2.817 2.817-2.817M11.808 25.189 6.66 20.04M16.912 4v2.817M25.363 15.268l1.878 1.878M25.363 11.512l2.817-.939M8.913 13.843l9.04 9.04M11.039 7.628 3.82 28l20.452-7.218L11.04 7.628Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ConfettiRegular.displayName = "ConfettiRegular";

export default ConfettiRegular;
