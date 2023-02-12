import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatsCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.264 21.815a8.304 8.304 0 1 0-7.38-4.492c.057.11.075.235.047.355l-.783 3.336a.5.5 0 0 0 .61.599l3.228-.82a.517.517 0 0 1 .37.047 8.267 8.267 0 0 0 3.908.975Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M12.834 21.85a8.308 8.308 0 0 0 11.73 4.534.517.517 0 0 1 .37-.047l3.228.82a.5.5 0 0 0 .61-.6l-.783-3.335a.517.517 0 0 1 .046-.356 8.305 8.305 0 0 0-6.634-12.083"
        />
      </svg>
    );
  }
);

ChatsCircleFill.displayName = "ChatsCircleFill";

export default ChatsCircleFill;
