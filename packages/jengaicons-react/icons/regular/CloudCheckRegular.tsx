import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudCheckRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.487 12.757a6.003 6.003 0 1 0-1.491 11.816H19.6c1.936 0 3.869-.529 5.265-1.87.488-.468.981-.995 1.42-1.559A8.573 8.573 0 1 0 10.853 16"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m23.296 14.97-5.061 5.06-2.531-2.53"
        />
      </svg>
    );
  }
);

CloudCheckRegular.displayName = "CloudCheckRegular";

export default CloudCheckRegular;
