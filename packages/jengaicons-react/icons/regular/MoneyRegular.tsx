import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MoneyRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 19.428a3.429 3.429 0 1 0 0-6.857 3.429 3.429 0 0 0 0 6.857ZM21.143 9.143l6.857 6M21.143 22.857l6.857-6M10.857 9.143l-6.857 6M10.857 22.857l-6.857-6"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 9.143h24v13.714H4z"
      />
    </svg>
  );
});

MoneyRegular.displayName = "MoneyRegular";

export default MoneyRegular;
