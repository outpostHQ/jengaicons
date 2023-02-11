import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BagSimplesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.978 6.518a4.217 4.217 0 0 1 7.2 2.982h-8.435c0-1.118.444-2.19 1.235-2.982ZM10.743 9.5a6.217 6.217 0 0 1 12.435 0h4.26a1 1 0 0 1 1 1v16.783a1 1 0 0 1-1 1H6.483a1 1 0 0 1-1-1V10.5a1 1 0 0 1 1-1h4.26Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

BagSimplesvgFill.displayName = "BagSimplesvgFill";

export default BagSimplesvgFill;
