import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22.772 24.573H9.996a6.002 6.002 0 1 1 1.491-11.816M10.853 16c0-1.359.323-2.698.942-3.907m2.619-3.048a8.574 8.574 0 0 1 11.872 12.1c-.234.3-.484.59-.74.867M6.716 4.947 25.285 27"
        />
      </svg>
    );
  }
);

CloudSlashRegular.displayName = "CloudSlashRegular";

export default CloudSlashRegular;
