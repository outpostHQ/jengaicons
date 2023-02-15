import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const DotsSixVertical = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeMiterlimit="10"
          strokeWidth={weight || weightCtx || "2"}
          d="M11.23 18.77a2.77 2.77 0 1 0 0-5.54 2.77 2.77 0 0 0 0 5.54ZM11.23 9.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM11.23 28a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM20.77 18.77a2.77 2.77 0 1 0 0-5.54 2.77 2.77 0 0 0 0 5.54ZM20.77 9.538a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538ZM20.77 28a2.77 2.77 0 1 0 0-5.539 2.77 2.77 0 0 0 0 5.539Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DotsSixVertical.displayName = "DotsSixVertical";

export default DotsSixVertical;
