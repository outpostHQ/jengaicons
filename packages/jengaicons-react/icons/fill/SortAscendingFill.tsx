import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SortAscendingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.729 7.461a1 1 0 0 0 0 2h14.774a1 1 0 1 0 0-2H7.73Zm0 6.953a1 1 0 1 0 0 2h7.822a1 1 0 1 0 0-2H7.729Zm-1 7.952a1 1 0 0 1 1-1h6.084a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm15.774-9.69a1 1 0 0 1 1 1v8.015l1.98-1.98a1 1 0 0 1 1.415 1.414l-3.687 3.687a.995.995 0 0 1-1.107.21 1 1 0 0 1-.314-.216l-3.68-3.681a1 1 0 1 1 1.413-1.415l1.98 1.98v-8.014a1 1 0 0 1 1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SortAscendingFill.displayName = "SortAscendingFill";

export default SortAscendingFill;
