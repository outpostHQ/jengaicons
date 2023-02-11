import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SquaresFourRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M4 4h9.6v9.6H4zM4 18.4h9.6V28H4zM18.4 4H28v9.6h-9.6zM18.4 18.4H28V28h-9.6z"
        />
      </svg>
    );
  }
);

SquaresFourRegular.displayName = "SquaresFourRegular";

export default SquaresFourRegular;
