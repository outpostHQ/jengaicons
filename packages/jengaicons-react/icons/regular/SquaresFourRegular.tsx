import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SquaresFourRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4h9.6v9.6H4zM4 18.4h9.6V28H4zM18.4 4H28v9.6h-9.6zM18.4 18.4H28V28h-9.6z"
        />
      </svg>
    );
  }
);

SquaresFourRegular.displayName = "SquaresFourRegular";

export default SquaresFourRegular;
