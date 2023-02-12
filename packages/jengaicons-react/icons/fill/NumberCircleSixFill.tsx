import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberCircleSixFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 28.283c6.627 0 12-5.373 12-12s-5.373-12-12-12c-6.628 0-12 5.373-12 12s5.372 12 12 12Zm1.513-19.359a1 1 0 0 1 .345 1.372l-2.086 3.493a4.5 4.5 0 1 1-3.674 2.252l.01-.02a4.46 4.46 0 0 1 .051-.084l3.982-6.667a1 1 0 0 1 1.372-.346Zm-4.013 9.359a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

NumberCircleSixFill.displayName = "NumberCircleSixFill";

export default NumberCircleSixFill;
