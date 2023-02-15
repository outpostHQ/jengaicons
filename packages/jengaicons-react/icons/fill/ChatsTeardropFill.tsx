import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChatsTeardropFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.261 21.824c4.597 0 8.323-3.721 8.323-8.312 0-4.59-3.726-8.312-8.323-8.312A8.315 8.315 0 0 0 4.96 12.92v8.405a.5.5 0 0 0 .5.5h7.801Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.868 21.983a8.325 8.325 0 0 0 7.79 5.383h8.302V18.46a8.317 8.317 0 0 0-7.595-7.689"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChatsTeardropFill.displayName = "ChatsTeardropFill";

export default ChatsTeardropFill;
