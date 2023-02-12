import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChalkboardSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.674 8.14a1 1 0 0 0-1 1v14.286H4.96a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2h-1.714V9.14a1 1 0 0 0-1-1H7.674ZM23.96 23.426v-2.429a1 1 0 0 0-1-1h-6.857a1 1 0 0 0-1 1v2.429h2v-.429a1 1 0 0 1 1-1h2.857a1 1 0 0 1 1 1v.429h2Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChalkboardSimpleFill.displayName = "ChalkboardSimpleFill";

export default ChalkboardSimpleFill;
