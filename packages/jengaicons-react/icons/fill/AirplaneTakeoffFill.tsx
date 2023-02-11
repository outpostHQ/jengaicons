import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AirplaneTakeoffFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.662 19.513a5 5 0 0 1-6.938-1.367l-1.55-2.313a.5.5 0 0 1 .136-.693l2.13-1.43a.5.5 0 0 1 .455-.052l2.298.864a.5.5 0 0 0 .454-.053l2.031-1.362a.5.5 0 0 0 .021-.816l-2.935-2.194a.5.5 0 0 1 .02-.816L11.7 7.997a.5.5 0 0 1 .405-.068l5.744 1.507a.5.5 0 0 0 .405-.068l5.712-3.832a2 2 0 0 1 2.775.547l1.877 2.797a.5.5 0 0 1-.137.694l-14.818 9.939Zm-4.791 3.333a1 1 0 1 0 0 2h20.024a1 1 0 1 0 0-2H8.871Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

AirplaneTakeoffFill.displayName = "AirplaneTakeoffFill";

export default AirplaneTakeoffFill;
