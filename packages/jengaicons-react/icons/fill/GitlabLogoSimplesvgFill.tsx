import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitlabLogoSimplesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22.172 13.215h-10.12l-3.716-7.43-3.459 12.81 12.299 8.456 11.786-8.456-3.587-12.81-3.203 7.43Z"
        />
      </svg>
    );
  }
);

GitlabLogoSimplesvgFill.displayName = "GitlabLogoSimplesvgFill";

export default GitlabLogoSimplesvgFill;
