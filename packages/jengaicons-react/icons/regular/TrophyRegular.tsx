import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TrophyRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.286 7.428v5.904c0 4.253 3.402 7.779 7.655 7.81a7.715 7.715 0 0 0 7.773-7.714v-6a.857.857 0 0 0-.857-.857H9.143a.857.857 0 0 0-.857.857ZM12.572 25.428h6.857M16 21.143v4.285"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.286 6.571h15.428v6.857a7.714 7.714 0 1 1-15.429 0V6.571Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.714 9.143H28v1.714a4.286 4.286 0 0 1-4.286 4.286v-6ZM8.286 9.143H4v1.714a4.286 4.286 0 0 0 4.286 4.286v-6Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TrophyRegular.displayName = "TrophyRegular";

export default TrophyRegular;
