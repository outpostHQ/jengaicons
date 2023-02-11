import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleDottedFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M5.46 6.821a1.5 1.5 0 0 0-1.5 1.5v5.039a1 1 0 1 0 2 0V8.82h6.609l3.713 3.428a.996.996 0 0 0 .678.265h3a1 1 0 1 0 0-2h-2.61l-3.568-3.295a1.5 1.5 0 0 0-1.018-.398H5.46Zm20.5 3.693a1 1 0 0 0 0 2h2v.862a1 1 0 0 0 2 0v-1.862a1 1 0 0 0-1-1h-3Zm-20 6.538a1 1 0 1 0-2 0v3.692a1 1 0 1 0 2 0v-3.692Zm24 .048a1 1 0 1 0-2 0v3.692a1 1 0 0 0 2 0V17.1Zm-24 7.337a1 1 0 0 0-2 0v1.846a1 1 0 0 0 1 1h1.912a1 1 0 1 0 0-2H5.96v-.846Zm24 .016a1 1 0 1 0-2 0v.83h-1.175a1 1 0 1 0 0 2h2.175a1 1 0 0 0 1-1v-1.83Zm-19.263.83a1 1 0 1 0 0 2h3.824a1 1 0 0 0 0-2h-3.824Zm7.649 0a1 1 0 1 0 0 2h4.088a1 1 0 1 0 0-2h-4.088Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

FolderSimpleDottedFill.displayName = "FolderSimpleDottedFill";

export default FolderSimpleDottedFill;
