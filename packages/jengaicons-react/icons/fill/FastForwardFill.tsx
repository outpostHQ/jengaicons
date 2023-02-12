import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FastForwardFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color } = props;

    return (
      <svg
        style={{ width: size || 32, height: size || 32 }}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M15.9 16.358a.5.5 0 0 1 0 .85L5.725 23.529a.5.5 0 0 1-.764-.425V10.462a.5.5 0 0 1 .764-.425L15.9 16.358Zm12.376 0a.5.5 0 0 1 0 .85L18.1 23.529a.5.5 0 0 1-.764-.425V10.462a.5.5 0 0 1 .764-.425l10.177 6.321Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FastForwardFill.displayName = "FastForwardFill";

export default FastForwardFill;
