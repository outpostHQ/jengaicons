import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const CloudSun = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m11.261 8.587-.487-2.737M7.46 10.814l-2.286-1.6M6.738 15.121 4 15.608M15.414 9.6l1.601-2.286M7.906 17.149a5.293 5.293 0 0 1-1.174-2.49 5.174 5.174 0 0 1 9.82-3.008"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M12.677 16.185a5.57 5.57 0 1 0-1.385 10.965h8.7c1.936 0 3.874-.524 5.253-1.884.402-.396.803-.834 1.164-1.298a7.957 7.957 0 1 0-14.321-4.774"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CloudSun.displayName = "CloudSun";

export default CloudSun;
