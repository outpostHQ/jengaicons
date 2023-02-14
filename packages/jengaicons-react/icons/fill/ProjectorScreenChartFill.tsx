import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ProjectorScreenChartFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M5.883 3.283a1 1 0 0 0-1 1v3.692a1 1 0 0 0 1 1h1.846v10.923H5.883a1 1 0 1 0 0 2H15.96v2.693c0 .093.013.184.037.27a1.845 1.845 0 0 0 .963 3.422 1.846 1.846 0 0 0 .963-3.422c.024-.086.037-.177.037-.27v-2.693h10.077a1 1 0 0 0 0-2H26.19V8.975h1.846a1 1 0 0 0 1-1V4.283a1 1 0 0 0-1-1H5.883Zm1 3.692V5.283h20.154v1.692H6.883Zm7.077 7.308a1 1 0 1 0-2 0v2a1 1 0 0 0 2 0v-2Zm3-2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Zm5 0a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0v-4Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ProjectorScreenChartFill.displayName = "ProjectorScreenChartFill";

export default ProjectorScreenChartFill;
