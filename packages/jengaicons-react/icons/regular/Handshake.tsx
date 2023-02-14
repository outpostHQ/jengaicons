import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Handshake = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          d="M7.072 9.282a.5.5 0 0 1 .683-.183l2.45 1.415-3.322 5.754-2.45-1.414a.5.5 0 0 1-.183-.683l2.822-4.889ZM24.928 9.282a.5.5 0 0 0-.683-.183l-2.45 1.415 3.322 5.754 2.45-1.414a.5.5 0 0 0 .183-.683l-2.822-4.889Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m9.945 10.537 5.74-1.87a.5.5 0 0 1 .38.028l3.684 1.842M6.692 15.973l6.007 4.68a.5.5 0 0 0 .186.09l6.185 1.54a.5.5 0 0 0 .483-.14l5.522-5.805"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M22.118 10.552h-4.63a.5.5 0 0 0-.35.144l-3.992 3.927a.5.5 0 0 0-.003.71l.17.169a3 3 0 0 0 4.242 0l.443-.443a.5.5 0 0 1 .646-.051l4.513 3.256M8.612 21.355l2.471 2.119a.5.5 0 0 0 .207.106l3.348.817"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Handshake.displayName = "Handshake";

export default Handshake;
