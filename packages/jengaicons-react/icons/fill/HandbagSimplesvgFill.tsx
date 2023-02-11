import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HandbagSimplesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M13.978 6.518a4.217 4.217 0 0 1 7.2 2.982h-8.435c0-1.118.444-2.19 1.235-2.982ZM10.743 9.5a6.217 6.217 0 1 1 12.435 0h4.361a1 1 0 0 1 .995.895l1.787 16.782a1 1 0 0 1-.995 1.106H4.594a1 1 0 0 1-.994-1.106l1.787-16.782A1 1 0 0 1 6.38 9.5h4.362Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

HandbagSimplesvgFill.displayName = "HandbagSimplesvgFill";

export default HandbagSimplesvgFill;
