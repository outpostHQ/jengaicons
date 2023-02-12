import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const KanbanRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 5.09h7.636v8.728H4V5.091ZM20.364 5.09H28v8.728h-7.636V5.091Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.636 5.09h8.728v13.092h-8.728V5.09Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 13.818h7.636V26.91H4v-13.09ZM20.364 13.818H28v8.738h-7.636v-8.738Z"
        />
      </svg>
    );
  }
);

KanbanRegular.displayName = "KanbanRegular";

export default KanbanRegular;
