import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CommandRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h6v6h-6v-6ZM19 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-3.5 3.5H19V9.5ZM13 9.5a3.5 3.5 0 1 0-7 0A3.5 3.5 0 0 0 9.5 13H13V9.5ZM19 22.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-3.5-3.5H19v3.5ZM13 22.5a3.5 3.5 0 1 1-7 0A3.5 3.5 0 0 1 9.5 19H13v3.5Z"
        />
      </svg>
    );
  }
);

CommandRegular.displayName = "CommandRegular";

export default CommandRegular;
