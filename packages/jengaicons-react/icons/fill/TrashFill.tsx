import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrashFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M11.96 3.783a1 1 0 0 0-1 1v3h-5a1 1 0 0 0 0 2h2v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-18h2a1 1 0 0 0 0-2h-5v-3a1 1 0 0 0-1-1h-10Zm9 4v-2h-8v2h8Zm-7 6a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Zm7 1a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0v-8Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

TrashFill.displayName = "TrashFill";

export default TrashFill;
