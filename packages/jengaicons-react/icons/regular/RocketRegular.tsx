import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RocketRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.64 28h-3.804M11.917 11.125v12.483h8.174V11.125C20.001 7.097 17.366 4.696 16.06 4c-3.538 1.8-4.236 5.5-4.143 7.125ZM11.783 14.89l-6.117 6.118V28l6.117-4.07M20.217 14.89l6.118 6.118V28l-6.118-4.07"
        />
      </svg>
    );
  }
);

RocketRegular.displayName = "RocketRegular";

export default RocketRegular;
