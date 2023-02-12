import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitlabLogoSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.212 12.79h-10.12L7.375 5.36 3.917 18.171l12.298 8.455 11.786-8.455-3.587-12.81-3.202 7.43Z"
        />
      </svg>
    );
  }
);

GitlabLogoSimpleRegular.displayName = "GitlabLogoSimpleRegular";

export default GitlabLogoSimpleRegular;
