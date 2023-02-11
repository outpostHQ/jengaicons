import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FastForwardFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.9 16.358a.5.5 0 0 1 0 .85L5.725 23.529a.5.5 0 0 1-.764-.425V10.462a.5.5 0 0 1 .764-.425L15.9 16.358Zm12.376 0a.5.5 0 0 1 0 .85L18.1 23.529a.5.5 0 0 1-.764-.425V10.462a.5.5 0 0 1 .764-.425l10.177 6.321Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

FastForwardFill.displayName = "FastForwardFill";

export default FastForwardFill;
