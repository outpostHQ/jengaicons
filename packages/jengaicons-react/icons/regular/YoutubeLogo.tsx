import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const YoutubeLogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m20.072 16-5.918-3.692v7.384L20.072 16Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M4 16c0 3.433.355 5.448.624 6.483a1.836 1.836 0 0 0 1.112 1.257C9.599 25.225 16 25.184 16 25.184s6.401.04 10.264-1.444a1.837 1.837 0 0 0 1.112-1.257c.27-1.035.624-3.05.624-6.483s-.355-5.448-.624-6.483a1.836 1.836 0 0 0-1.112-1.257C22.401 6.776 16 6.816 16 6.816S9.599 6.776 5.736 8.26a1.837 1.837 0 0 0-1.112 1.257C4.354 10.552 4 12.567 4 16Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

YoutubeLogo.displayName = "YoutubeLogo";

export default YoutubeLogo;
