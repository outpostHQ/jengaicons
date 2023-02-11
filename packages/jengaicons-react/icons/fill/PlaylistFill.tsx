import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlaylistFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M19.874 25.903a3.016 3.016 0 1 0 0-6.032 3.016 3.016 0 0 0 0 6.032Z"
        fill="#1C1B1F"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M4.96 6.663a1 1 0 1 0 0 2h21.12a1 1 0 1 0 0-2H4.96Zm0 7.68a1 1 0 1 0 0 2h13.4a1 1 0 1 0 0-2H4.96Zm-1 8.68a1 1 0 0 1 1-1h7.64a1 1 0 0 1 0 2H4.96a1 1 0 0 1-1-1Zm19.227-11.97a1 1 0 0 0-1.297.955v10.996a1 1 0 0 0 2 0v-9.638l4.773 1.484a1 1 0 0 0 .594-1.91l-6.07-1.887Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

PlaylistFill.displayName = "PlaylistFill";

export default PlaylistFill;
