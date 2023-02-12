import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowCircleUpLeftsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12 0-6.628 5.373-12 12-12 6.628 0 12 5.372 12 12Zm-15.535 3.464a1 1 0 0 0 1-1v-3.585l5.364 5.364a1 1 0 1 0 1.414-1.415l-5.364-5.364h3.586a1 1 0 1 0 0-2h-5.993a.973.973 0 0 0-.347.06.997.997 0 0 0-.66.947v5.993a1 1 0 0 0 1 1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ArrowCircleUpLeftsvgFill.displayName = "ArrowCircleUpLeftsvgFill";

export default ArrowCircleUpLeftsvgFill;
