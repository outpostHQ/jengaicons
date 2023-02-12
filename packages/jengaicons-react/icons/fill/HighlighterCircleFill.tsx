import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HighlighterCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.96 27.6a11.981 11.981 0 0 1-4 .683 11.98 11.98 0 0 1-4-.683v-8.317h8V27.6Zm2-.922v-8.395a1 1 0 0 0-1-1h-1v-8a1 1 0 0 0-1.447-.894l-6 3a1 1 0 0 0-.553.894v5h-1a1 1 0 0 0-1 1v8.395a11.995 11.995 0 0 1-6-10.395c0-6.627 5.372-12 12-12 6.627 0 12 5.373 12 12 0 4.442-2.413 8.32-6 10.395Zm-4-15.777v6.382h-4v-4.382l4-2Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

HighlighterCircleFill.displayName = "HighlighterCircleFill";

export default HighlighterCircleFill;
