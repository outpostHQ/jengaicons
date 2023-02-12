import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberCircleThreeFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12Zm-14.906-7a1 1 0 1 0 0 2h3.907l-2.689 3.896a1 1 0 0 0 .823 1.568c.648 0 1.37.27 1.926.729.556.458.845 1.015.845 1.54a2.268 2.268 0 0 1-4.034 1.422 1 1 0 0 0-1.556 1.256 4.268 4.268 0 0 0 7.59-2.68c0-1.279-.694-2.357-1.573-3.081a5.313 5.313 0 0 0-1.51-.87l2.906-4.212a1 1 0 0 0-.823-1.568h-5.812Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

NumberCircleThreeFill.displayName = "NumberCircleThreeFill";

export default NumberCircleThreeFill;
