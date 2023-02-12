import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FlagCheckeredRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.426 28V5.829M4.426 21.665c8.447-6.334 14.781 6.335 23.227 0V5.83c-8.446 6.334-14.78-6.335-23.227 0"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M27.653 13.496c-8.446 6.335-14.78-6.335-23.227 0M12.345 4.43v15.837M19.735 7.228v15.836"
        />
      </svg>
    );
  }
);

FlagCheckeredRegular.displayName = "FlagCheckeredRegular";

export default FlagCheckeredRegular;
