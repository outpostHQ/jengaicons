import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatTeardropRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 28c6.636 0 12.015-5.373 12.015-12S22.635 4 16 4a12.004 12.004 0 0 0-9.746 4.98 11.927 11.927 0 0 0-2.239 6.163V28H16Z"
        />
      </svg>
    );
  }
);

ChatTeardropRegular.displayName = "ChatTeardropRegular";

export default ChatTeardropRegular;
