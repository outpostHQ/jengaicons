import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShieldCheckeredFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.96 4.283H6.536c-.553 0-1 .446-1 .998v8.84H15.96V4.283Zm0 11.838H5.578c.429 5.858 4.072 8.372 10.382 11.647V16.121Zm2 11.696V16.12h10.382c-.434 6.047-4.21 8.774-10.382 11.696Zm0-13.696V4.283h9.424a1 1 0 0 1 1 1v8.838H17.96Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ShieldCheckeredFill.displayName = "ShieldCheckeredFill";

export default ShieldCheckeredFill;
