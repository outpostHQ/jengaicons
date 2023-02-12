import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MountainsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.79 10.275a1.034 1.034 0 1 1 2.068 0 1.034 1.034 0 0 1-2.067 0Zm1.034-3.034a3.034 3.034 0 1 0 0 6.068 3.034 3.034 0 0 0 0-6.068Zm-7.728 6.954 2.38 3.808h-4.76l2.38-3.808Zm0-2.887a1 1 0 0 1 .848.47l5.558 8.893 3.04-4.863a.5.5 0 0 1 .847 0l6.096 9.752a.5.5 0 0 1-.424.765H4.96a1 1 0 0 1-.848-1.53l8.136-13.017a1 1 0 0 1 .848-.47Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

MountainsFill.displayName = "MountainsFill";

export default MountainsFill;
