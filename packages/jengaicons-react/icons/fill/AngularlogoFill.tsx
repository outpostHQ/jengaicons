import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AngularlogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m4.96 9.144 12-4.285 12 4.285-2.477 14.572-9.523 5.142-9.53-5.142L4.96 9.144Zm15.29 9.857 1.424 3h2.143l-6.857-15-6.857 15h2.143l1.424-3h6.58Zm-1.017-2.142h-4.546l2.272-4.788 2.274 4.788Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

AngularlogoFill.displayName = "AngularlogoFill";

export default AngularlogoFill;
