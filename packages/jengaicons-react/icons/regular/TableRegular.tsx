import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TableRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4 13h24M4 19h24M11 13v12"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 7h24v18H4z"
      />
    </svg>
  );
});

TableRegular.displayName = "TableRegular";

export default TableRegular;
