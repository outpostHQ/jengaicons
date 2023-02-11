import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DotsSixFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M23.421 21.683a2.77 2.77 0 1 1 5.539 0 2.77 2.77 0 0 1-5.539 0Zm-9.23 0a2.77 2.77 0 1 1 5.538 0 2.77 2.77 0 0 1-5.539 0Zm-6.462-2.77a2.77 2.77 0 1 0 0 5.539 2.77 2.77 0 0 0 0-5.538Zm15.692-8.03a2.77 2.77 0 1 1 5.539 0 2.77 2.77 0 0 1-5.539 0Zm-9.23 0a2.77 2.77 0 1 1 5.538 0 2.77 2.77 0 0 1-5.539 0Zm-6.462-2.77a2.77 2.77 0 1 0 0 5.54 2.77 2.77 0 0 0 0-5.54Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

DotsSixFill.displayName = "DotsSixFill";

export default DotsSixFill;
