import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M27.96 4.781h-22a1 1 0 0 0-1 1v19.904a1 1 0 0 0 1.63.777l4.399-3.569a1 1 0 0 1 .63-.224H27.96a1 1 0 0 0 1-1V5.781a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
});

ChatFill.displayName = "ChatFill";

export default ChatFill;
