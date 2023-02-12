import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyInrRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.043 10.348h13.913M9.043 6h13.913M12.957 6a5.652 5.652 0 1 1 0 11.304H9.043L18.61 26"
        />
      </svg>
    );
  }
);

CurrencyInrRegular.displayName = "CurrencyInrRegular";

export default CurrencyInrRegular;
