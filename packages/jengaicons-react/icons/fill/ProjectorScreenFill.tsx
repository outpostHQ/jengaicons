import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ProjectorScreenFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M5.883 3.783a1 1 0 0 0-1 1v3.692a1 1 0 0 0 1 1h1.846v10.923H5.883a1 1 0 1 0 0 2H15.96v2.693c0 .093.013.184.037.27a1.845 1.845 0 0 0 .963 3.422 1.846 1.846 0 0 0 .963-3.422c.024-.086.037-.177.037-.27v-2.693h10.077a1 1 0 0 0 0-2H26.19V9.475h1.846a1 1 0 0 0 1-1V4.783a1 1 0 0 0-1-1H5.883Zm1 3.692V5.783h20.154v1.692H6.883Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ProjectorScreenFill.displayName = "ProjectorScreenFill";

export default ProjectorScreenFill;
