import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderNotchPlusRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13 18.5h6M16 15.5v6M4 10.461v14.77h24V10.462H15"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.385 6.77H4v6.271h7.385l3.692-2.58-3.692-3.692Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

FolderNotchPlusRegular.displayName = "FolderNotchPlusRegular";

export default FolderNotchPlusRegular;
