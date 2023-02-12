import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AngularlogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m4.96 9.144 12-4.285 12 4.285-2.477 14.572-9.523 5.142-9.53-5.142L4.96 9.144Zm15.29 9.857 1.424 3h2.143l-6.857-15-6.857 15h2.143l1.424-3h6.58Zm-1.017-2.142h-4.546l2.272-4.788 2.274 4.788Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

AngularlogoFill.displayName = "AngularlogoFill";

export default AngularlogoFill;
