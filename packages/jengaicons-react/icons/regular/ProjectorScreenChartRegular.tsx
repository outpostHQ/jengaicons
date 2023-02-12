import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ProjectorScreenChartRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12 14v2M16 13v3M20 12v4M16 20.615v3.693M16 28a1.846 1.846 0 1 0 0-3.692A1.846 1.846 0 0 0 16 28ZM4.923 20.615h22.154"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.77 7.692h18.46v12.923H6.77V7.692ZM4.923 4h22.154v3.692H4.923V4Z"
        />
      </svg>
    );
  }
);

ProjectorScreenChartRegular.displayName = "ProjectorScreenChartRegular";

export default ProjectorScreenChartRegular;
