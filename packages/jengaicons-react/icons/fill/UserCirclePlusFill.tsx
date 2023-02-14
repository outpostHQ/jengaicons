import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UserCirclePlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.96 16.783c0-6.075 4.925-11 11-11a1 1 0 0 0 0-2c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13a1 1 0 0 0-2 0c0 3.723-1.85 7.015-4.681 9.005a6.39 6.39 0 0 0-12.638 0 10.987 10.987 0 0 1-4.681-9.005Zm20-13a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Zm-9 16.568a4.784 4.784 0 1 0 0-9.568 4.784 4.784 0 0 0 0 9.568Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

UserCirclePlusFill.displayName = "UserCirclePlusFill";

export default UserCirclePlusFill;
