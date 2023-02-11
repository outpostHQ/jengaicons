import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShareNetworkRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.539 19.692a3.692 3.692 0 1 0 0-7.384 3.692 3.692 0 0 0 0 7.384ZM22.462 28a3.692 3.692 0 1 0 0-7.385 3.692 3.692 0 0 0 0 7.385ZM22.462 11.385a3.692 3.692 0 1 0 0-7.385 3.692 3.692 0 0 0 0 7.385ZM19.356 9.689l-6.712 4.315M12.644 17.996l6.712 4.315"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ShareNetworkRegular.displayName = "ShareNetworkRegular";

export default ShareNetworkRegular;
