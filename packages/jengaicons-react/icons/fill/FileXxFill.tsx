import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileXxFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M25.96 28.283h-18a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1h11.606a1 1 0 0 1 .709.294L26.669 11a1 1 0 0 1 .291.705v15.579a1 1 0 0 1-1 1Zm-11.829-7.586a1 1 0 0 0 1.415 1.414l1.414-1.414 1.414 1.414a1 1 0 0 0 1.415-1.414l-1.415-1.414 1.414-1.414a1 1 0 0 0-1.414-1.415L16.96 17.87l-1.414-1.415a1 1 0 1 0-1.414 1.415l1.414 1.414-1.414 1.414ZM20.05 5.501v5.223a.5.5 0 0 0 .5.5h5.228L20.049 5.5Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

FileXxFill.displayName = "FileXxFill";

export default FileXxFill;
