import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ListFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.73 9.57a1 1 0 0 1 1-1H26.19a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm0 6.713a1 1 0 0 1 1-1H26.19a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm1 5.713a1 1 0 1 0 0 2H26.19a1 1 0 1 0 0-2H7.729Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

ListFill.displayName = "ListFill";

export default ListFill;
