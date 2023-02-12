import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StickerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28 4H4v24h13.21L28 17.307V4Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M17.09 27v-4.91a5 5 0 0 1 5-5h4.86"
        />
      </svg>
    );
  }
);

StickerRegular.displayName = "StickerRegular";

export default StickerRegular;
