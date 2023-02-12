import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatCircleDotsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.373 12-12 12-2.073 0-4.024-.526-5.725-1.451a.511.511 0 0 0-.37-.048L5.758 28.08a.5.5 0 0 1-.61-.598l1.234-5.26a.512.512 0 0 0-.047-.356 11.948 11.948 0 0 1-1.375-5.583c0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-16.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChatCircleDotsFill.displayName = "ChatCircleDotsFill";

export default ChatCircleDotsFill;
