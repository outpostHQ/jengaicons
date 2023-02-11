import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatTeardropTextRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12 13.999h7.5M12 17.999h7.5"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.985 28C22.62 28 28 22.627 28 16S22.62 4 15.985 4a12.004 12.004 0 0 0-9.746 4.98A11.927 11.927 0 0 0 4 15.143V28h11.985Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ChatTeardropTextRegular.displayName = "ChatTeardropTextRegular";

export default ChatTeardropTextRegular;
