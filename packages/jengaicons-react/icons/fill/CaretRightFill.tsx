import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CaretRightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.607 15.93 11.814 5.136a.5.5 0 0 0-.854.353v21.586a.5.5 0 0 0 .854.353l10.793-10.792a.5.5 0 0 0 0-.708Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CaretRightFill.displayName = "CaretRightFill";

export default CaretRightFill;
