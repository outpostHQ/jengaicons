import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CaretRightRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.646 15.646 10.854 4.854a.5.5 0 0 0-.854.353v21.586a.5.5 0 0 0 .854.353l10.792-10.792a.5.5 0 0 0 0-.708Z"
        />
      </svg>
    );
  }
);

CaretRightRegular.displayName = "CaretRightRegular";

export default CaretRightRegular;
