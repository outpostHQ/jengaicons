import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BalloonRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.234 13.234c0 5.102-4.132 11.08-9.234 11.08s-9.234-5.978-9.234-11.08a9.234 9.234 0 1 1 18.468 0v0Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.923 7.774a5.517 5.517 0 0 1 4.537 4.536"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.881 24.426 13.628 27.3a.5.5 0 0 0 .458.7h3.772a.5.5 0 0 0 .462-.69l-1.186-2.884"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

BalloonRegular.displayName = "BalloonRegular";

export default BalloonRegular;
