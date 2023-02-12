import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChartBarHorizontalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.38 28.283a1 1 0 0 1-2 0V4.283a1 1 0 1 1 2 0v.92h13.4a1 1 0 0 1 1 1v5.791h3.76a1 1 0 0 1 1 1v6.602a1 1 0 0 1-1 1h-9.52v5.767a1 1 0 0 1-1 1H8.38v.92Zm0-21.08v4.72h12.4v-4.72H8.38Zm0 18.16h6.64v-4.72H8.38v4.72Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChartBarHorizontalFill.displayName = "ChartBarHorizontalFill";

export default ChartBarHorizontalFill;
