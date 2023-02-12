import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NewspaperFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.58 7.537a1 1 0 0 0-1 1V24.03h-.62a1 1 0 0 1-1-1v-10.66a1 1 0 1 0-2 0v10.66a3 3 0 0 0 2.556 2.967c.081.021.166.033.254.033H28.96a1 1 0 0 0 1-1V8.537a1 1 0 0 0-1-1H8.58Zm5.536 6.494a1 1 0 0 0 0 2h9.278a1 1 0 0 0 0-2h-9.278Zm0 3.711a1 1 0 1 0 0 2h9.278a1 1 0 0 0 0-2h-9.278Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

NewspaperFill.displayName = "NewspaperFill";

export default NewspaperFill;
