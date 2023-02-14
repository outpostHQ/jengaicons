import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BriefcaseMetalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.96 4.283a1 1 0 0 0-1 1v4h-5a1 1 0 0 0-1 1v3h24v-3a1 1 0 0 0-1-1h-5v-4a1 1 0 0 0-1-1h-10Zm1 4.74v-2.74h8v2.74h-8Zm-8 12.26v-6h24v6h-24Zm24 2h-24v3a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-3Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BriefcaseMetalFill.displayName = "BriefcaseMetalFill";

export default BriefcaseMetalFill;
