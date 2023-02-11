import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VignetteFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 5.533a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-20a1 1 0 0 0-1-1h-24Zm1 20v-18h22v18h-22Zm19-9c0 3.314-3.582 6-8 6s-8-2.686-8-6 3.582-6 8-6 8 2.686 8 6Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

VignetteFill.displayName = "VignetteFill";

export default VignetteFill;
