import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CoatHangerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeWidth="2"
          d="m16.2 14.193 10.598 7.937a.5.5 0 0 1-.3.9H5.541a.5.5 0 0 1-.294-.905l13.837-10.038a.463.463 0 0 0 .174-.532c-.38-1.033-1.366-2.607-3.057-2.585-2.355.031-2.852 1.731-3.038 2.914"
        />
      </svg>
    );
  }
);

CoatHangerRegular.displayName = "CoatHangerRegular";

export default CoatHangerRegular;
