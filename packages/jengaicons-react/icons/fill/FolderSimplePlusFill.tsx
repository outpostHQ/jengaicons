import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderSimplePlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.35 10.744h10.61a1 1 0 0 1 1 1v12.77a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1V8.052a1 1 0 0 1 1-1h6.609a1 1 0 0 1 .678.265l3.426 3.162a1 1 0 0 0 .678.265Zm-.39 3.039a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FolderSimplePlusFill.displayName = "FolderSimplePlusFill";

export default FolderSimplePlusFill;
