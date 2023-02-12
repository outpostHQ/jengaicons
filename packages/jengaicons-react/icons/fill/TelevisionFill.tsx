import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TelevisionFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.424 4.455a1 1 0 1 0-1.414 1.414l2.536 2.535H4.96a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-9.586L21.91 5.87a1 1 0 0 0-1.415-1.414L16.96 7.99l-3.536-3.535Zm8.536 21.95v-16h6v16h-6Zm3-14.676a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2h-1Zm0 5a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2h-1Zm-1 6a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TelevisionFill.displayName = "TelevisionFill";

export default TelevisionFill;
