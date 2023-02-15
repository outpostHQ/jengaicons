import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BriefcaseFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.959 4.283a1 1 0 0 0-1 1v3H4.96a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-6.001v-3a1 1 0 0 0-1-1h-10Zm9 4v-2h-8v2h8Zm-9 2H5.96v6.335c8.356 4.463 13.517 4.511 22-.003v-6.332H11.959Zm3.5 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BriefcaseFill.displayName = "BriefcaseFill";

export default BriefcaseFill;
