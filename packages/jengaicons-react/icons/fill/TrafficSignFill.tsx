import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TrafficSignFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.667 15.576a1 1 0 0 0 0 1.414l10.586 10.586a1 1 0 0 0 1.414 0L28.253 16.99a1 1 0 0 0 0-1.414L17.667 4.99a1 1 0 0 0-1.414 0L5.667 15.576Zm12.182-3a1 1 0 0 1 1.414 0l2.952 2.952c.21.183.341.452.341.752v.005c0 .255-.098.51-.293.705l-3 3a1 1 0 0 1-1.414-1.414l1.296-1.296h-5.781v2.003a1 1 0 1 1-2 0V16.28a1 1 0 0 1 1-1h6.775l-1.29-1.29a1 1 0 0 1 0-1.414Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TrafficSignFill.displayName = "TrafficSignFill";

export default TrafficSignFill;
