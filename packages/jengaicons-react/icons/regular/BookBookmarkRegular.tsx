import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BookBookmarkRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.009 27.536V7a3 3 0 0 1 3-3h16.982v19.965H9.009a3 3 0 0 0-3 3V28h17.99"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.966 4.11v11.843l4.043-3.022 4.002 3.022V4.109"
        />
      </svg>
    );
  }
);

BookBookmarkRegular.displayName = "BookBookmarkRegular";

export default BookBookmarkRegular;
