import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NewspaperRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.156 14.748h9.278M13.156 18.46h9.278M5.81 24.746H28V8.254H7.62v16.492H6a2 2 0 0 1-2-2V12.087"
        />
      </svg>
    );
  }
);

NewspaperRegular.displayName = "NewspaperRegular";

export default NewspaperRegular;
