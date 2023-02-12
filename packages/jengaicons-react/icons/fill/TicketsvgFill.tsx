import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TicketsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 8.475a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v4.742a3.066 3.066 0 1 0 0 6.132v4.742a.5.5 0 0 1-.5.5h-23a.5.5 0 0 1-.5-.5v-4.742a3.066 3.066 0 0 0 0-6.132V8.476Zm7.258 16.1V7.985h2v16.592h-2Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TicketsvgFill.displayName = "TicketsvgFill";

export default TicketsvgFill;
