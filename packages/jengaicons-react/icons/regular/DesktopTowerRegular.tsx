import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DesktopTowerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          d="M14.286 25.428H9.143M24.571 10h-3.428M24.571 13.428h-3.428M27.143 6.571H18.57a.857.857 0 0 0-.857.858V24.57c0 .474.384.858.857.858h8.572A.857.857 0 0 0 28 24.57V7.43a.857.857 0 0 0-.857-.858ZM11.714 22v3.429"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.857 22.857a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M15.143 10.857H4V22h11.143"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DesktopTowerRegular.displayName = "DesktopTowerRegular";

export default DesktopTowerRegular;
