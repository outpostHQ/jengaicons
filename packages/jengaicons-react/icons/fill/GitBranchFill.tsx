import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GitBranchFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.516 11.901a3.819 3.819 0 1 0-1.985-.337 3.89 3.89 0 0 1-3.89 3.793h-5.715a5.922 5.922 0 0 0-4.148 1.687v-5.125a1.01 1.01 0 0 0-.008-.13 3.82 3.82 0 0 0-.992-7.506 3.818 3.818 0 0 0-.991 7.506 1.01 1.01 0 0 0-.009.13v8.728c0 .044.003.087.009.13a3.82 3.82 0 0 0 .991 7.506 3.818 3.818 0 0 0 1.232-7.433 3.943 3.943 0 0 1 3.916-3.494h5.716a5.89 5.89 0 0 0 5.874-5.455Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GitBranchFill.displayName = "GitBranchFill";

export default GitBranchFill;
