import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MedalRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 21.143A8.571 8.571 0 1 0 16 4a8.571 8.571 0 0 0 0 17.143Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 17.714a5.143 5.143 0 1 0 0-10.286 5.143 5.143 0 0 0 0 10.286ZM10.857 19.466V28l5.17-2.808L21.142 28v-8.534"
      />
    </svg>
  );
});

MedalRegular.displayName = "MedalRegular";

export default MedalRegular;
