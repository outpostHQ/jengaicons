import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FlagFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.172 5.547a.999.999 0 0 0-1.825.565v22.17a1 1 0 1 0 2 0V21.28c3.812-2.246 7.212-.788 10.613.67 3.695 1.583 7.39 3.167 11.614 0V6.111c-4.223 3.167-7.919 1.583-11.614 0-3.452-1.48-6.905-2.96-10.788-.565Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

FlagFill.displayName = "FlagFill";

export default FlagFill;
