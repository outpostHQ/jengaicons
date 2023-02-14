import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ArchiveBoxFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.247 3.836a1 1 0 0 1 .895-.553h19.636a1 1 0 0 1 .895.553l2.173 4.346c.07.134.111.287.114.45v19.651a1 1 0 0 1-1 1h-24a1 1 0 0 1-1-1V8.644c0-.167.042-.324.114-.462l2.173-4.346ZM7.76 5.283 6.578 7.647h20.764L26.16 5.283H7.76Zm9.2 6.727a1 1 0 0 1 1 1v8.495l2.921-2.921a1 1 0 0 1 1.414 1.414l-4.622 4.623a.996.996 0 0 1-1.42.006l-4.629-4.629a1 1 0 0 1 1.415-1.414l2.921 2.921V13.01a1 1 0 0 1 1-1Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ArchiveBoxFill.displayName = "ArchiveBoxFill";

export default ArchiveBoxFill;
