import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatDotsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="M16 14.998a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 14.998a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM22 14.998a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          fill="#1C1B1F"
        />
        <path
          d="M28 4.498H4v23.004l6.304-5.115H28V4.498Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ChatDotsRegular.displayName = "ChatDotsRegular";

export default ChatDotsRegular;
