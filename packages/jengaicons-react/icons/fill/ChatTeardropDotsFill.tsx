import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatTeardropDotsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.38 12-12.015 12H5.96a1 1 0 0 1-1-1V15.426A11.927 11.927 0 0 1 7.2 9.263a12.004 12.004 0 0 1 9.745-4.98c6.636 0 12.015 5.372 12.015 12Zm-16.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChatTeardropDotsFill.displayName = "ChatTeardropDotsFill";

export default ChatTeardropDotsFill;
