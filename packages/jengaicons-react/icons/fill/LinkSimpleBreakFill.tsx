import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LinkSimpleBreakFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.813 5.283c-1.63 0-3.194.647-4.347 1.8l-3.033 3.033a1 1 0 0 0 1.414 1.414l3.033-3.033a4.147 4.147 0 0 1 5.866 5.865l-3.034 3.033a1 1 0 0 0 1.415 1.415l3.033-3.033a6.148 6.148 0 0 0-4.347-10.494Zm-9.606 9.887a1 1 0 0 0-1.414-1.414L7.76 16.79a6.147 6.147 0 0 0 8.693 8.694l3.034-3.033a1 1 0 0 0-1.414-1.414l-3.034 3.033a4.148 4.148 0 0 1-5.865-5.866l3.033-3.033Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

LinkSimpleBreakFill.displayName = "LinkSimpleBreakFill";

export default LinkSimpleBreakFill;
