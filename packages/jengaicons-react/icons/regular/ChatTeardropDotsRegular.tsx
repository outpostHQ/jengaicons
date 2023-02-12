import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatTeardropDotsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM22 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.985 28C22.62 28 28 22.627 28 16S22.62 4 15.985 4a12.004 12.004 0 0 0-9.746 4.98A11.927 11.927 0 0 0 4 15.143V28h11.985Z"
        />
      </svg>
    );
  }
);

ChatTeardropDotsRegular.displayName = "ChatTeardropDotsRegular";

export default ChatTeardropDotsRegular;
