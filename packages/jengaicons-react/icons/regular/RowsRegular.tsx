import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RowsRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6.182h24v7.636H4zM4 18.182h24v7.636H4z"
      />
    </svg>
  );
});

RowsRegular.displayName = "RowsRegular";

export default RowsRegular;
