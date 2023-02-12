import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MarkerCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M21.96 27.195a11.956 11.956 0 0 1-5 1.088c-1.785 0-3.478-.39-5-1.088v-4.912h10v4.912Zm2-1.164v-4.748a1 1 0 0 0-1-1h-1v-3a1 1 0 0 0-1-1h-.74l-1.716-6.864a1.5 1.5 0 0 0-1.455-1.136h-.179a1.5 1.5 0 0 0-1.455 1.136L13.7 16.283h-.739a1 1 0 0 0-1 1v3h-1a1 1 0 0 0-1 1v4.748a11.985 11.985 0 0 1-5-9.748c0-6.627 5.372-12 12-12 6.627 0 12 5.373 12 12 0 4.015-1.972 7.57-5 9.748Zm-4.5-7.748h-5.5v2h6v-2h-.5Zm-2.5-6.796 1.199 4.796H15.76l1.199-4.796Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MarkerCircleFill.displayName = "MarkerCircleFill";

export default MarkerCircleFill;
