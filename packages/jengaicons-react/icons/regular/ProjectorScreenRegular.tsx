import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ProjectorScreenRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 20.615v3.693M16 28a1.846 1.846 0 1 0 0-3.692A1.846 1.846 0 0 0 16 28ZM4.923 20.615h22.154"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.77 7.692h18.46v12.923H6.77V7.692ZM4.923 4h22.154v3.692H4.923V4Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ProjectorScreenRegular.displayName = "ProjectorScreenRegular";

export default ProjectorScreenRegular;
