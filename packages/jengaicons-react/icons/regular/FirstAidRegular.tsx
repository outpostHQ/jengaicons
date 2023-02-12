import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FirstAidRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.056 11.888V4.112h8.168v7.776H28v7.888h-7.776v8.112h-8.168v-8.112H4v-7.888h8.056Z"
        />
      </svg>
    );
  }
);

FirstAidRegular.displayName = "FirstAidRegular";

export default FirstAidRegular;
