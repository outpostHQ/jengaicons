import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BarricadeFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 7.898a1 1 0 0 0-1 1v10.154a1 1 0 0 0 1 1h3.615v3.616a1 1 0 1 0 2 0v-3.616h12.77v3.616a1 1 0 1 0 2 0v-3.616h3.615a1 1 0 0 0 1-1V8.898a1 1 0 0 0-1-1h-24Zm19.393 10.154h3.607v-.158l-6.905-7.996h-8.172l8.154 8.154h3.316Zm-11.624 0-6.769-6.77v6.77h6.769Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

BarricadeFill.displayName = "BarricadeFill";

export default BarricadeFill;
