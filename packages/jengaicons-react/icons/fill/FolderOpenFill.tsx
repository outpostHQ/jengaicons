import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderOpenFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M3.96 7.052a1 1 0 0 1 1-1h7.385a1 1 0 0 1 .707.293l3.4 3.4h10.662a1 1 0 0 1 1 1v3.692h.077a1 1 0 0 1 .948 1.318l-3.269 9.737v.022a1 1 0 0 1-1 1H4.96a1 1 0 0 1-1-1V7.052Zm2 15.462 2.464-7.393a1 1 0 0 1 .949-.684h16.74v-2.693H16.038a.997.997 0 0 1-.71-.296L11.93 8.052H5.96v14.462Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderOpenFill.displayName = "FolderOpenFill";

export default FolderOpenFill;
