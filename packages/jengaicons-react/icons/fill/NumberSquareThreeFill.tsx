import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberSquareThreeFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M5.96 4.283a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-22Zm8.094 5a1 1 0 1 0 0 2h3.907l-2.689 3.896a1 1 0 0 0 .823 1.568c.648 0 1.37.27 1.926.729.556.458.845 1.015.845 1.54a2.268 2.268 0 0 1-4.034 1.422 1 1 0 0 0-1.556 1.256 4.268 4.268 0 0 0 7.59-2.68c0-1.279-.694-2.357-1.573-3.081a5.313 5.313 0 0 0-1.51-.87l2.906-4.212a1 1 0 0 0-.823-1.568h-5.812Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

NumberSquareThreeFill.displayName = "NumberSquareThreeFill";

export default NumberSquareThreeFill;
