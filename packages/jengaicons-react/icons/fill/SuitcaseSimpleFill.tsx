import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SuitcaseSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.96 4.783a1 1 0 0 0-1 1v4h-5a1 1 0 0 0-1 1v8.88l24 .24v-9.12a1 1 0 0 0-1-1h-5v-4a1 1 0 0 0-1-1h-10Zm9 5v-3h-8v3h8Zm-16 11.88 24 .24v4.88a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-5.12Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SuitcaseSimpleFill.displayName = "SuitcaseSimpleFill";

export default SuitcaseSimpleFill;
