import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GitBranchRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.818 28a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636ZM24.182 11.636a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636ZM7.818 11.636a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636ZM7.818 11.636v8.728"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.572 11.952v0a4.082 4.082 0 0 1-4.082 4.082h-7.34a4.126 4.126 0 0 0-4.126 4.126v0"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GitBranchRegular.displayName = "GitBranchRegular";

export default GitBranchRegular;
