import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileDottedFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.96 3.283a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h.628a1 1 0 0 0 0-2H6.96Zm4.883 0a1 1 0 1 0 0 2h3.255a1 1 0 1 0 0-2h-3.255Zm6.51 0a1 1 0 1 0 0 2h1.213l.054.054v5.816a.5.5 0 0 0 .5.5h5.789l.051.051v1.711a1 1 0 1 0 2 0v-2.124a1 1 0 0 0-.291-.705l-.53-.532a1.067 1.067 0 0 0-.095-.109l-4.53-4.525a1.004 1.004 0 0 0-.08-.09L20.69 3.576a1 1 0 0 0-.709-.294h-1.627Zm-10.393 7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm20 7.38a1 1 0 0 0-2 0v4.248a1 1 0 1 0 2 0v-4.248Zm-20 .62a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm20 7.876a1 1 0 0 0-2 0v1.124h-.667a1 1 0 1 0 0 2h1.667a1 1 0 0 0 1-1v-2.124Zm-20 .124a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1h1.667a1 1 0 1 0 0-2H7.96v-1Zm4 1a1 1 0 1 0 0 2h3.333a1 1 0 1 0 0-2H11.96Zm6.667 0a1 1 0 1 0 0 2h3.333a1 1 0 0 0 0-2h-3.333Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FileDottedFill.displayName = "FileDottedFill";

export default FileDottedFill;
