import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RowsRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M4 6.182h24v7.636H4zM4 18.182h24v7.636H4z"
      />
    </svg>
  );
});

RowsRegular.displayName = "RowsRegular";

export default RowsRegular;
