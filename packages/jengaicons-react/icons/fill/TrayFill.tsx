import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrayFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 3.283a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-24a1 1 0 0 0-1-1h-24Zm1 17.329v6.67h22v-6.67h-4.069a1 1 0 0 0-.707.293l-2.947 2.947a1 1 0 0 1-.707.293h-5.297a1 1 0 0 1-.707-.293l-2.947-2.947a1 1 0 0 0-.707-.293H5.96Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

TrayFill.displayName = "TrayFill";

export default TrayFill;
