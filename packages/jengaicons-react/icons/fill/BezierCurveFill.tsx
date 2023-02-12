import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BezierCurveFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 13.711a2.57 2.57 0 0 0 2.22-1.273l.06.018a8.44 8.44 0 0 1 6.016 6.581c.004.024.01.048.016.072a2.572 2.572 0 1 0 1.957-.114 1 1 0 0 0-.007-.324 10.438 10.438 0 0 0-4.121-6.53h5.859a1 1 0 1 0 0-2H19.53c-.066 0-.13.006-.193.018a2.572 2.572 0 0 0-4.756 0 1.008 1.008 0 0 0-.194-.019H4.96a1 1 0 0 0 0 2h5.86a10.439 10.439 0 0 0-4.121 6.531.999.999 0 0 0-.008.324 2.573 2.573 0 1 0 1.958.114 1 1 0 0 0 .016-.072 8.44 8.44 0 0 1 6.075-6.6 2.57 2.57 0 0 0 2.22 1.274Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

BezierCurveFill.displayName = "BezierCurveFill";

export default BezierCurveFill;
