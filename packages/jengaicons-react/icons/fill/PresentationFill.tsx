import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PresentationFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 3.283a1 1 0 0 1 1 1v2.88h9.52a1 1 0 0 1 1 1v14.32a1 1 0 0 1-1 1h-5.4l3.34 4.175a1 1 0 1 1-1.561 1.25l-3.84-4.8a.996.996 0 0 1-.22-.625h-5.68c.001.22-.07.44-.218.625l-3.84 4.8a1 1 0 1 1-1.562-1.25l3.34-4.175h-5.4a1 1 0 0 1-1-1V8.163a1 1 0 0 1 1-1h9.521v-2.88a1 1 0 0 1 1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

PresentationFill.displayName = "PresentationFill";

export default PresentationFill;
