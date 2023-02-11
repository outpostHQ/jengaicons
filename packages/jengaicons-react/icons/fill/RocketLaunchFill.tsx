import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RocketLaunchFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m6.635 14.431 5.856 1.223 5.13 5.13 1.07 5.809a1 1 0 0 0 1.69.526l4.395-4.395a1 1 0 0 0 .293-.707V13.34l.703-.703c2.27-2.37 2.469-5.157 2.232-6.657a.818.818 0 0 0-.637-.667C24.2 4.605 21.585 6.438 20.635 7.5l-.559.559h-8.843a1 1 0 0 0-.707.293l-4.394 4.394a1 1 0 0 0 .503 1.686Zm16.434.908-3.73 3.731.974 5.289 2.756-2.756V15.34ZM8.854 12.851l5.318 1.11 3.904-3.903h-6.428l-2.794 2.793ZM7.138 25.064a1 1 0 0 0 .855.875c1.606.224 3.14-.288 4.347-.935 1.213-.651 2.2-1.495 2.76-2.1a1 1 0 1 0-1.469-1.358c-.422.457-1.237 1.159-2.237 1.696-.717.384-1.477.657-2.225.73.167-1.056.762-2.774 2.45-4.514a1 1 0 0 0-1.435-1.392c-2.685 2.766-3.2 5.683-3.046 6.998Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

RocketLaunchFill.displayName = "RocketLaunchFill";

export default RocketLaunchFill;
