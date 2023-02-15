import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderNotchOpenFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M3.96 7.052a1 1 0 0 1 1-1h7.385a1 1 0 0 1 .707.293l3.4 3.4h10.662a1 1 0 0 1 1 1v3.692h.06a1 1 0 0 1 .948 1.315l-3.249 9.767h-.002a1 1 0 0 1-1 .995H4.96a1 1 0 0 1-1-1V7.052Zm2 16.068 2.436-5.829a1 1 0 0 1 .922-.614h6.146a1 1 0 0 0 .596-.198l2.48-1.845a1 1 0 0 1 .597-.197h6.977v-2.693H16.037a.997.997 0 0 1-.71-.296L11.93 8.052H5.96V23.12Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderNotchOpenFill.displayName = "FolderNotchOpenFill";

export default FolderNotchOpenFill;
