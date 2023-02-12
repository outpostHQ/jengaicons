import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TestTubeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.832 15.47s2.183-1.765 5.675 0c3.493 1.764 5.676 0 5.676 0"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.868 18.366 21.234 4 28 10.766l-2.853.793-12.543 12.543a4.056 4.056 0 0 1-5.736-5.736Z"
        />
      </svg>
    );
  }
);

TestTubeRegular.displayName = "TestTubeRegular";

export default TestTubeRegular;
