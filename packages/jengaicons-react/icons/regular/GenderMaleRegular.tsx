import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GenderMaleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.391 28.5a9.391 9.391 0 1 0 0-18.783 9.391 9.391 0 1 0 0 18.783ZM20.032 12.468 28 4.5M21.74 4.5H28v6.26"
        />
      </svg>
    );
  }
);

GenderMaleRegular.displayName = "GenderMaleRegular";

export default GenderMaleRegular;
