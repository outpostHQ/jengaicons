import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const SidebarElegant = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M11 6.5v20M28 13.71V26.5H4v-20h15.17"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m25.55 4.405.797 2.455h2.581L26.84 8.377l.798 2.454-2.088-1.517-2.088 1.518.797-2.455-2.088-1.517h2.581l.798-2.455ZM18.445 13.96l.461 1.42h1.492l-1.207.876.461 1.42-1.207-.878-1.207.877.461-1.419-1.206-.876h1.491l.461-1.42Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SidebarElegant.displayName = "SidebarElegant";

export default SidebarElegant;
