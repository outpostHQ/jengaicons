import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BookmarkssvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.905 3.283a1 1 0 0 0-1 1v4.004l.001.04H8.361a.5.5 0 0 0-.5.5V27.29a.5.5 0 0 0 .798.401l6.016-4.462a.5.5 0 0 1 .598.001l5.942 4.454a.5.5 0 0 0 .8-.4v-4.868l3.438 2.619a1 1 0 0 0 1.606-.796V4.283a1 1 0 0 0-1-1H11.905Zm10.11 16.89a.996.996 0 0 1 .626.205l2.418 1.842V5.283H12.905v3.044h8.61a.5.5 0 0 1 .5.5v11.347Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BookmarkssvgFill.displayName = "BookmarkssvgFill";

export default BookmarkssvgFill;
