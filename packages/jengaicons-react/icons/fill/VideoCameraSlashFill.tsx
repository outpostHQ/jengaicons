import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const VideoCameraSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.79 4.11a1 1 0 0 0-1.48 1.346l3.675 4.041H5.46a.5.5 0 0 0-.5.5v9.072a5 5 0 0 0 5 5h11.901c.111 0 .21-.035.289-.09l4.979 5.477a1 1 0 1 0 1.48-1.346L6.79 4.11Zm9.18 5.387h1.99a5 5 0 0 1 5 5v1.208a.5.5 0 0 1 .232-.406l5-3.172a.5.5 0 0 1 .768.422v8.468a.5.5 0 0 1-.768.422l-5-3.172a.5.5 0 0 1-.232-.406v.268l-6.99-8.632Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

VideoCameraSlashFill.displayName = "VideoCameraSlashFill";

export default VideoCameraSlashFill;
