import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LightningSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.938 5.21a1 1 0 0 1 1.415 0l20 20a1 1 0 0 1-1.415 1.414l-6.073-6.073L13.714 27c-.349.365-.957.043-.851-.45l1.381-6.41a.5.5 0 0 0-.315-.574l-6.045-2.243a.5.5 0 0 1-.187-.814l3.967-4.16-5.726-5.725a1 1 0 0 1 0-1.414Zm11.986 6.975 1.132-6.246c.09-.49-.514-.794-.855-.433l-3.843 4.068a.5.5 0 0 0 .007.694l7.44 7.558a.5.5 0 0 0 .721-.01l1.73-1.855a.5.5 0 0 0-.175-.803l-5.857-2.422a.5.5 0 0 1-.3-.551Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LightningSlashFill.displayName = "LightningSlashFill";

export default LightningSlashFill;
