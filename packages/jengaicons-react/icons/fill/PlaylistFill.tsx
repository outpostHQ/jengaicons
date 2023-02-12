import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlaylistFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.874 25.903a3.016 3.016 0 1 0 0-6.032 3.016 3.016 0 0 0 0 6.032Z"
      />
      <path
        fill={color || "#000000"}
        fillRule="evenodd"
        d="M4.96 6.663a1 1 0 1 0 0 2h21.12a1 1 0 1 0 0-2H4.96Zm0 7.68a1 1 0 1 0 0 2h13.4a1 1 0 1 0 0-2H4.96Zm-1 8.68a1 1 0 0 1 1-1h7.64a1 1 0 0 1 0 2H4.96a1 1 0 0 1-1-1Zm19.227-11.97a1 1 0 0 0-1.297.955v10.996a1 1 0 0 0 2 0v-9.638l4.773 1.484a1 1 0 0 0 .594-1.91l-6.07-1.887Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

PlaylistFill.displayName = "PlaylistFill";

export default PlaylistFill;
