import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SelectionSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m4 4 24 24"
        />
        <path
          stroke={color || "#000000"}
          stroke-dasharray="4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.097 6H26v13.91M6 12.09V26h13.91"
        />
      </svg>
    );
  }
);

SelectionSlashRegular.displayName = "SelectionSlashRegular";

export default SelectionSlashRegular;
