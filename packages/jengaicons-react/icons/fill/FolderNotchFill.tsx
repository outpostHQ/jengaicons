import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderNotchFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.46 6.552a1 1 0 0 0-1 1v6.272c0 .033.002.066.005.1v11.09a1 1 0 0 0 1 1H28.46a1 1 0 0 0 1-1V11.483a1 1 0 0 0-1-1H17.19l-3.638-3.638a1 1 0 0 0-.707-.293H5.46Zm1 4.692V8.552h5.97l2.556 2.556-2.456 1.716H6.46v-1.58Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FolderNotchFill.displayName = "FolderNotchFill";

export default FolderNotchFill;
