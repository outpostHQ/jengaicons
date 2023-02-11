import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CookiesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M28.96 16.217a11.962 11.962 0 0 1-3.522 8.566c-4.618 4.61-12.163 4.662-16.841.113A12 12 0 0 1 17.032 4.29a1.002 1.002 0 0 1 .976 1.22 4 4 0 0 0 3.858 4.88 1.003 1.003 0 0 1 .995.994 4 4 0 0 0 4.878 3.858 1 1 0 0 1 1.22.974Zm-8.5 7.074a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-6.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-2.5-5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8 .5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CookiesvgFill.displayName = "CookiesvgFill";

export default CookiesvgFill;
