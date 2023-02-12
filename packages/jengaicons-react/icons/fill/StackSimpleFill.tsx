import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StackSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m28.216 12.942-11 6.546a.5.5 0 0 1-.512 0l-11-6.546a.5.5 0 0 1 .012-.866l11-6.155a.5.5 0 0 1 .488 0l11 6.155a.5.5 0 0 1 .012.866Zm-22.744 5.84A1 1 0 1 0 4.449 20.5l12 7.141a1 1 0 0 0 1.022 0l12-7.141a1 1 0 0 0-1.022-1.719L16.96 25.618 5.472 18.781Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

StackSimpleFill.displayName = "StackSimpleFill";

export default StackSimpleFill;
