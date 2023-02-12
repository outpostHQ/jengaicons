import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaintBucketFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.983 24.385c0-1.767 1.571-3.535 1.92-3.906a.092.092 0 0 1 .137 0c.349.371 1.92 2.14 1.92 3.906a1.988 1.988 0 0 1-3.977 0ZM8.774 6.365A1 1 0 1 0 7.36 7.78l1.414-1.414Zm3.052 3.052L8.774 6.365 7.36 7.78l3.052 3.052 1.414-1.414Z"
        />
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M5.667 15.576a1 1 0 0 0 0 1.414l9.271 9.272a1 1 0 0 0 1.415 0l9.271-9.272a1 1 0 0 0 0-1.414l-9.271-9.272a1 1 0 0 0-1.415 0l-3.112 3.113 3.521 3.52a2.988 2.988 0 1 1-1.414 1.414l-3.521-3.52-4.745 4.745Zm10.266-.638-.005.005a.988.988 0 1 0 .011-.011l-.006.006Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

PaintBucketFill.displayName = "PaintBucketFill";

export default PaintBucketFill;
