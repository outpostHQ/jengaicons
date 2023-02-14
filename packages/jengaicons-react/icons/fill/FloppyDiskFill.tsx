import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FloppyDiskFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.415 28.283H5.96a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1h15.314a1 1 0 0 1 .693.28l6.686 6.433a1 1 0 0 1 .307.721v15.566a1 1 0 0 1-1 1h-3.454v-9.817a1 1 0 0 0-1-1H10.415a1 1 0 0 0-1 1v9.817Zm2 0h11.09v-8.817h-11.09v8.817Zm.181-19.635a1 1 0 0 1 1-1h7.637a1 1 0 0 1 0 2h-7.637a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FloppyDiskFill.displayName = "FloppyDiskFill";

export default FloppyDiskFill;
