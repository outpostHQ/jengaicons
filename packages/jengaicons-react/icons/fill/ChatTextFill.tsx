import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatTextFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M5.96 4.781h22a1 1 0 0 1 1 1V21.67a1 1 0 0 1-1 1H11.619a1 1 0 0 0-.63.223L6.59 26.462a1 1 0 0 1-1.63-.776V5.78a1 1 0 0 1 1-1Zm6 7.575a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

ChatTextFill.displayName = "ChatTextFill";

export default ChatTextFill;
