import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NutFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.46 4.572a1 1 0 0 0-1 0L7.067 9.994a1 1 0 0 0-.5.866v10.846a1 1 0 0 0 .5.866l9.393 5.422a1 1 0 0 0 1 0l9.392-5.422a1 1 0 0 0 .5-.866V10.86a1 1 0 0 0-.5-.866L17.46 4.572Zm4 11.711a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

NutFill.displayName = "NutFill";

export default NutFill;
