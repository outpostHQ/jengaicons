import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SelectionSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M5.667 3.576A1 1 0 0 0 4.253 4.99l24 24a1 1 0 0 0 1.414-1.414l-24-24Zm7.39 1.707a1 1 0 1 0 0 2h1.738a1 1 0 1 0 0-2h-1.738Zm5.214 0a1 1 0 1 0 0 2h3.476a1 1 0 0 0 0-2H18.27Zm6.951 0a1 1 0 1 0 0 2h.738v.739a1 1 0 1 0 2 0V6.283a1 1 0 0 0-1-1h-1.738Zm2.738 6.216a1 1 0 0 0-2 0v3.478a1 1 0 1 0 2 0v-3.478Zm-20 .875a1 1 0 1 0-2 0v1.738a1 1 0 1 0 2 0v-1.738Zm0 5.216a1 1 0 1 0-2 0v3.477a1 1 0 1 0 2 0V17.59Zm20 .864a1 1 0 0 0-2 0v1.74a1 1 0 1 0 2 0v-1.74Zm-20 6.09a1 1 0 1 0-2 0v1.739a1 1 0 0 0 1 1h1.739a1 1 0 0 0 0-2H7.96v-.739Zm4.216.739a1 1 0 1 0 0 2h3.478a1 1 0 0 0 0-2h-3.478Zm6.955 0a1 1 0 0 0 0 2h1.74a1 1 0 0 0 0-2h-1.74Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SelectionSlashFill.displayName = "SelectionSlashFill";

export default SelectionSlashFill;
