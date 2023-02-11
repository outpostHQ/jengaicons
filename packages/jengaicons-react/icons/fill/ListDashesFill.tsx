import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ListDashesFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M7.73 8.57a1 1 0 0 0 0 2h1.678a1 1 0 1 0 0-2H7.729Zm5.873 0a1 1 0 1 0 0 2h12.588a1 1 0 1 0 0-2H13.604Zm.001 6.713a1 1 0 1 0 0 2h12.587a1 1 0 1 0 0-2H13.604Zm-1 7.713a1 1 0 0 1 1-1h12.587a1 1 0 1 1 0 2H13.604a1 1 0 0 1-1-1ZM6.73 16.283a1 1 0 0 1 1-1h1.678a1 1 0 1 1 0 2H7.73a1 1 0 0 1-1-1Zm1 5.713a1 1 0 1 0 0 2h1.678a1 1 0 0 0 0-2H7.73Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ListDashesFill.displayName = "ListDashesFill";

export default ListDashesFill;
