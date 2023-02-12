import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PenNibRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m12.539 19.534-8.136 8.135M12.945 19.1a2.397 2.397 0 1 0 3.39-3.39 2.397 2.397 0 0 0-3.39 3.39Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m7.12 10.416 6.89-2.157a.57.57 0 0 1 .572.14l8.992 8.993a.57.57 0 0 1 .13.607l-2.507 6.524a.569.569 0 0 1-.425.354L4.676 27.945a.569.569 0 0 1-.668-.652l2.72-16.427a.57.57 0 0 1 .392-.45Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.855 17.681 28 13.536l-9.491-9.49-4.145 4.144"
        />
      </svg>
    );
  }
);

PenNibRegular.displayName = "PenNibRegular";

export default PenNibRegular;
