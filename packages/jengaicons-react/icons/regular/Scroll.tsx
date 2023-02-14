import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Scroll = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M13.06 12.794h8.31M13.06 16.95h8.31"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M23.828 27.516H9.843a2 2 0 0 1-2-2V4.484h15.683a2 2 0 0 1 2 2v15.67"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m11 27.516-.008-1a1 1 0 0 0 .008 2v-1Zm-.011-5.04-.004 1 .004-1Zm0 .667H27.99v-2H10.99v2Zm.99-.678v-.312h-2v.313h2Zm-.994 1.01c.805.004 1.48.67 1.48 1.521h2c0-1.926-1.54-3.513-3.472-3.52l-.008 2Zm1.48 1.521c0 .848-.672 1.514-1.473 1.52l.017 2c1.924-.016 3.456-1.599 3.456-3.52h-2Zm7.024 1.52H11v2h8.49v-2Zm5.511 0h-5.51v2H25v-2Zm2-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2Zm0-2.363v2.363h2v-2.363h-2Zm-17.021.313c0 .565.46 1.007 1.006 1.01l.008-2a.99.99 0 0 1 .986.99h-2Zm18.011.677a.99.99 0 0 1-.99-.99h2a1.01 1.01 0 0 0-1.01-1.01v2Zm-17.001-2a1.01 1.01 0 0 0-1.01 1.01h2a.99.99 0 0 1-.99.99v-2Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M7.888 9.857H4V7.484a3 3 0 0 1 3-3h.888"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Scroll.displayName = "Scroll";

export default Scroll;
