import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LightningSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="m5.685 5.634 20 20M11.325 11.415l-5.113 5.36 7.163 2.659L11.53 28l7.985-8.37M13.72 8.905 18.397 4l-1.625 8.418 7.016 2.733-2.137 2.24"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

LightningSlashRegular.displayName = "LightningSlashRegular";

export default LightningSlashRegular;
