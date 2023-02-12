import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatDotsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 4.781h22a1 1 0 0 1 1 1V21.67a1 1 0 0 1-1 1H11.619a1 1 0 0 0-.63.223L6.59 26.462a1 1 0 0 1-1.63-.776V5.78a1 1 0 0 1 1-1Zm6.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

ChatDotsFill.displayName = "ChatDotsFill";

export default ChatDotsFill;
