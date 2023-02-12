import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BriefcaseFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.959 4.283a1 1 0 0 0-1 1v3H4.96a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-6.001v-3a1 1 0 0 0-1-1h-10Zm9 4v-2h-8v2h8Zm-9 2H5.96v6.335c8.356 4.463 13.517 4.511 22-.003v-6.332H11.959Zm3.5 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

BriefcaseFill.displayName = "BriefcaseFill";

export default BriefcaseFill;
