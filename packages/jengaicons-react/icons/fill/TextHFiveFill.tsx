import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextHFiveFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.73 9.452a1 1 0 1 0-2 0V20.53a1 1 0 0 0 2 0v-4.538h7.6v4.538a1 1 0 0 0 2 0V9.452a1 1 0 1 0-2 0v4.539h-7.6V9.452Zm13.749 3.8a1 1 0 0 0-.986.83l-.84 4.85a1 1 0 0 0 1.702.867c.05-.051.105-.1.165-.146.278-.214.646-.35 1.061-.35.968 0 1.61.704 1.61 1.405 0 .701-.642 1.406-1.61 1.406a1.69 1.69 0 0 1-1.294-.572 1 1 0 1 0-1.525 1.293 3.689 3.689 0 0 0 2.82 1.279c1.915 0 3.609-1.45 3.609-3.406 0-1.956-1.694-3.405-3.61-3.405-.212 0-.421.017-.625.05l.364-2.1h2.871a1 1 0 1 0 0-2h-3.712Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TextHFiveFill.displayName = "TextHFiveFill";

export default TextHFiveFill;
