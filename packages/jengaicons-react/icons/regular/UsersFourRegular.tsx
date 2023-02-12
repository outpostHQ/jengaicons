import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UsersFourRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.594 24.094a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6ZM11.594 11.099a3.3 3.3 0 1 0 0-6.599 3.3 3.3 0 0 0 0 6.599ZM20.407 24.094a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6ZM20.407 11.099a3.3 3.3 0 1 0 0-6.599 3.3 3.3 0 0 0 0 6.599Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 28.5a4.406 4.406 0 1 0-8.813 0M16 15.505a4.406 4.406 0 1 0-8.813 0"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.813 28.5a4.406 4.406 0 1 0-8.813 0M24.813 15.505a4.406 4.406 0 1 0-8.813 0"
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

UsersFourRegular.displayName = "UsersFourRegular";

export default UsersFourRegular;
