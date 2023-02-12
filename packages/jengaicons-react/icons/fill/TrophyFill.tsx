import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrophyFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M9.225 8.426v-.714a.857.857 0 0 1 .857-.858h13.714a.857.857 0 0 1 .857.858v.714h3.792a1 1 0 0 1 1 1v1.714a5.286 5.286 0 0 1-5.285 5.286 7.715 7.715 0 0 1-6.223 4.935.982.982 0 0 1 .002.065v3.285h2.428a1 1 0 1 1 0 2H13.51a1 1 0 0 1 0-2h2.429v-3.285c0-.022 0-.044.002-.065-2.85-.373-5.198-2.325-6.198-4.935a5.286 5.286 0 0 1-5.267-5.286V9.426a1 1 0 0 1 1-1h3.749ZM8.76 14.27a3.287 3.287 0 0 1-2.285-3.131v-.714H8.76v3.845Zm18.684-3.131c0 1.466-.96 2.708-2.286 3.13v-3.844h2.286v.714Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

TrophyFill.displayName = "TrophyFill";

export default TrophyFill;
