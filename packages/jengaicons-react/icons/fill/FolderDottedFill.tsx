import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderDottedFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 5.987a1 1 0 0 0-1 1V12.283a1 1 0 0 0 2 0v-1h17a1 1 0 0 0 0-2h-4a.998.998 0 0 0-.761.351L14.845 6.28a1 1 0 0 0-.708-.293H4.96Zm22 3.296a1 1 0 1 0 0 2h1v1a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1h-2Zm-21 7a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0v-4Zm24 0a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0v-4Zm-24 8a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-1v-1Zm24 0a1 1 0 0 0-2 0v1h-1a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1v-2Zm-19 1a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2h-4Zm8 0a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2h-4Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FolderDottedFill.displayName = "FolderDottedFill";

export default FolderDottedFill;
