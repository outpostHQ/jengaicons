import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AddressBookRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.75 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5.25 13.5h3M5.25 8.5h3M5.25 18.5h3M5.25 23.5h3"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.75 21a7.501 7.501 0 0 1 12 0"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.75 4h20v24h-20z"
        />
      </svg>
    );
  }
);

AddressBookRegular.displayName = "AddressBookRegular";

export default AddressBookRegular;
