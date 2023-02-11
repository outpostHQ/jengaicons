import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChatsRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M21.995 11H28v17.253l-4.728-3.837H10v-6.14"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 4.874H4v17.253l4.728-3.837H22V4.874Z"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChatsRegular.displayName = "ChatsRegular";

export default ChatsRegular;
