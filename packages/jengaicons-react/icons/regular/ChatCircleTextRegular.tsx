import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatCircleTextRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12 14h8M12 18h8"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16c0 2.016.497 3.916 1.375 5.584a.512.512 0 0 1 .047.355l-1.234 5.26a.5.5 0 0 0 .61.598l5.107-1.296a.511.511 0 0 1 .37.048A11.946 11.946 0 0 0 16 28Z"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

ChatCircleTextRegular.displayName = "ChatCircleTextRegular";

export default ChatCircleTextRegular;
