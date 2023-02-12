import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatCenteredDotsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.96 4.283h22a1 1 0 0 1 1 1v15.935a1 1 0 0 1-1 1h-6.448a1 1 0 0 0-.833.447l-2.887 4.352a1 1 0 0 1-1.67-.006l-2.835-4.34a1 1 0 0 0-.837-.453H5.96a1 1 0 0 1-1-1V5.283a1 1 0 0 1 1-1Zm6.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChatCenteredDotsFill.displayName = "ChatCenteredDotsFill";

export default ChatCenteredDotsFill;
