import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LineSegmentsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26.388 11.14a2.571 2.571 0 1 0-1.99-.943c-.04.05-.077.103-.109.162l-3.562 6.614a1.008 1.008 0 0 0-.075.18 2.61 2.61 0 0 0-1.251.184 1.005 1.005 0 0 0-.124-.15l-3.22-3.221a1.011 1.011 0 0 0-.15-.124 2.571 2.571 0 1 0-4.366.64c-.041.05-.078.104-.11.163L7.87 21.259a1.008 1.008 0 0 0-.075.18 2.571 2.571 0 1 0 1.728.93c.04-.049.076-.103.108-.162l3.562-6.614c.031-.059.056-.12.075-.18a2.603 2.603 0 0 0 1.25-.184c.036.054.078.104.124.15l3.221 3.221c.047.047.097.088.15.124a2.571 2.571 0 1 0 4.366-.64c.041-.05.078-.104.11-.163l3.561-6.614a1.01 1.01 0 0 0 .075-.18c.087.009.175.013.263.013Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LineSegmentsFill.displayName = "LineSegmentsFill";

export default LineSegmentsFill;
