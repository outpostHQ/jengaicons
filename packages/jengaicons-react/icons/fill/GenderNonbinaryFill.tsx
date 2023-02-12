import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GenderNonbinaryFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M13.475 3.953a1 1 0 0 0-1.116 1.66L15.167 7.5 12.36 9.387a1 1 0 1 0 1.116 1.66l2.485-1.67v4.01c0 .021 0 .043.002.064a7.7 7.7 0 0 0 .998 15.332 7.698 7.698 0 0 0 .998-15.332.97.97 0 0 0 .002-.064v-4.01l2.485 1.67a1 1 0 0 0 1.116-1.66L18.753 7.5l2.808-1.887a1 1 0 1 0-1.116-1.66L16.96 6.295l-3.485-2.342Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

GenderNonbinaryFill.displayName = "GenderNonbinaryFill";

export default GenderNonbinaryFill;
