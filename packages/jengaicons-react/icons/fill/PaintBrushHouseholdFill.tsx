import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaintBrushHouseholdFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.084 5.101a3.157 3.157 0 0 0-4.465 0l-6.268 6.269-1.988-1.867a1 1 0 0 0-1.386.016l-9.66 9.496a1 1 0 0 0-.007 1.42l8.555 8.555a1 1 0 0 0 1.414 0l9.318-9.318a1 1 0 0 0 0-1.414l-2.102-2.102 6.59-6.59a3.157 3.157 0 0 0 0-4.465Zm-16.141 9.222-5.506 5.411 1.446 1.446 2.706-2.706a1 1 0 1 1 1.414 1.414l-2.706 2.706 1.47 1.469 2.705-2.706a1 1 0 0 1 1.414 1.415l-2.706 2.705 1.392 1.392 5.458-5.458-7.087-7.088Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

PaintBrushHouseholdFill.displayName = "PaintBrushHouseholdFill";

export default PaintBrushHouseholdFill;
