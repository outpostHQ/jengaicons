import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CameraSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.501 4.321a1 1 0 0 0-1.48 1.346l3.287 3.615H5.96a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h19.711l2.169 2.385a1 1 0 1 0 1.48-1.346L7.5 4.322Zm12.527 16.753-6.054-6.66a4.5 4.5 0 1 0 6.054 6.659ZM23.54 9.282h4.419a1 1 0 0 1 1 1v13.477L12.98 6.284h7.469a1 1 0 0 1 .828.439l1.436 2.12a1 1 0 0 0 .828.439Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CameraSlashFill.displayName = "CameraSlashFill";

export default CameraSlashFill;
