import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LinkFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M21.64 8.052a3.55 3.55 0 0 1 2.51 6.061l-2.925 2.925a3.55 3.55 0 0 1-5.02 0 1 1 0 0 0-1.414 1.414 5.549 5.549 0 0 0 7.848 0l2.924-2.924a5.549 5.549 0 1 0-7.848-7.849l-2.047 2.047a1 1 0 1 0 1.414 1.415l2.047-2.048a3.55 3.55 0 0 1 2.511-1.04Zm-7.793 6.706a3.55 3.55 0 0 1 3.868.77 1 1 0 0 0 1.414-1.415 5.55 5.55 0 0 0-7.848 0l-2.925 2.925a5.55 5.55 0 1 0 7.848 7.849l2.048-2.048a1 1 0 0 0-1.414-1.414l-2.048 2.047a3.55 3.55 0 1 1-5.02-5.02l2.925-2.924c.33-.33.72-.591 1.152-.77Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

LinkFill.displayName = "LinkFill";

export default LinkFill;
