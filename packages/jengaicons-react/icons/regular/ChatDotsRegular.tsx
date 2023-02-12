import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatDotsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 14.998a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 14.998a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM22 14.998a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28 4.498H4v23.004l6.304-5.115H28V4.498Z"
        />
      </svg>
    );
  }
);

ChatDotsRegular.displayName = "ChatDotsRegular";

export default ChatDotsRegular;
