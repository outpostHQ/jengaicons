import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SortDescendingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.9 13.015a1 1 0 0 0 1.415 0l2.084-2.084v8.31a1 1 0 1 0 2 0v-8.31l2.085 2.084a1 1 0 1 0 1.414-1.414l-3.792-3.792a.997.997 0 0 0-1.414 0L17.9 11.601a1 1 0 0 0 0 1.414Zm-10.17 3.13a1 1 0 1 0 0 2h7.766a1 1 0 1 0 0-2H7.729Zm-1-5.903a1 1 0 0 1 1-1h6.04a1 1 0 0 1 0 2H7.73a1 1 0 0 1-1-1Zm1 12.807a1 1 0 1 0 0 2H22.4a1 1 0 1 0 0-2H7.73Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SortDescendingFill.displayName = "SortDescendingFill";

export default SortDescendingFill;
