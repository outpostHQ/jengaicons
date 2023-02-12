import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatCircleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeWidth="2"
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16c0 2.016.497 3.916 1.375 5.584a.512.512 0 0 1 .047.355l-1.234 5.26a.5.5 0 0 0 .61.598l5.107-1.296a.511.511 0 0 1 .37.048A11.946 11.946 0 0 0 16 28Z"
        />
      </svg>
    );
  }
);

ChatCircleRegular.displayName = "ChatCircleRegular";

export default ChatCircleRegular;
