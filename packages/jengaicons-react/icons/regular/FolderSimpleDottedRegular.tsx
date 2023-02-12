import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleDottedRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          stroke-dasharray="4 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 11.23V26h24V11.23H16"
        />
        <path
          stroke={color || "#000000"}
          strokeWidth="2"
          d="m16 11.23-3.856-3.559a.5.5 0 0 0-.34-.133H4.5a.5.5 0 0 0-.5.5v3.193"
        />
      </svg>
    );
  }
);

FolderSimpleDottedRegular.displayName = "FolderSimpleDottedRegular";

export default FolderSimpleDottedRegular;
