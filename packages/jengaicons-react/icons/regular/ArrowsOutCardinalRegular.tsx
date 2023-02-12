import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsOutCardinalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.038 4v8M11.757 8.243 15.999 4l4.244 4.242M11.757 23.759 16 28l4.242-4.243M16.038 20v8M4 16.038h8M8.243 11.796 4 16.038l4.243 4.243M23.757 11.756 28 16l-4.242 4.244M28 16.036h-8"
        />
      </svg>
    );
  }
);

ArrowsOutCardinalRegular.displayName = "ArrowsOutCardinalRegular";

export default ArrowsOutCardinalRegular;
