import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WifiSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m6.674 5.74 18.654 20.52M13.568 7.777A17.298 17.298 0 0 1 16 7.607a17.01 17.01 0 0 1 12 4.916M4 12.523a17.009 17.009 0 0 1 5.522-3.65M18.813 13.547a11.412 11.412 0 0 1 5.233 2.933M7.954 16.48a11.414 11.414 0 0 1 5.717-3.043M11.911 20.438a5.925 5.925 0 0 1 7.878-.27"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 25.793a1.399 1.399 0 1 0 0-2.798 1.399 1.399 0 0 0 0 2.798Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

WifiSlashRegular.displayName = "WifiSlashRegular";

export default WifiSlashRegular;
