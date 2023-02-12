import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderOpenFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M3.96 7.052a1 1 0 0 1 1-1h7.385a1 1 0 0 1 .707.293l3.4 3.4h10.662a1 1 0 0 1 1 1v3.692h.077a1 1 0 0 1 .948 1.318l-3.269 9.737v.022a1 1 0 0 1-1 1H4.96a1 1 0 0 1-1-1V7.052Zm2 15.462 2.464-7.393a1 1 0 0 1 .949-.684h16.74v-2.693H16.038a.997.997 0 0 1-.71-.296L11.93 8.052H5.96v14.462Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FolderOpenFill.displayName = "FolderOpenFill";

export default FolderOpenFill;
