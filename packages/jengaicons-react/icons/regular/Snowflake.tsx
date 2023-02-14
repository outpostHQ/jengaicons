import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Snowflake = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M16 7.792v17.415M12.735 4.527 16 7.793l3.265-3.266M12.735 28.473 16 25.208l3.265 3.265M8.463 12.146l15.074 8.708M4 13.344l4.463-1.198-1.198-4.462M24.735 25.316l-1.198-4.462L28 19.657M8.463 20.854l15.074-8.708M7.265 25.316l1.198-4.462L4 19.657M28 13.344l-4.463-1.198 1.198-4.462"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Snowflake.displayName = "Snowflake";

export default Snowflake;
