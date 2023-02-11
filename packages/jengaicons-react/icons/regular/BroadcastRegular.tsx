import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BroadcastRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 19.427a3.427 3.427 0 1 0 0-6.854 3.427 3.427 0 0 0 0 6.854ZM10.547 21.453a7.705 7.705 0 0 1 0-10.906M21.453 10.547a7.706 7.706 0 0 1 0 10.906M7.518 24.482a11.985 11.985 0 0 1 0-16.964M24.482 7.518a11.986 11.986 0 0 1 0 16.964"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

BroadcastRegular.displayName = "BroadcastRegular";

export default BroadcastRegular;
