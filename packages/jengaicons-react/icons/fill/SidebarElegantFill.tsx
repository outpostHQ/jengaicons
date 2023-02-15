import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SidebarElegantFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.96 6.283v20M28.96 13.493v12.79h-24v-20h15.17"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M25.695 4.774a.2.2 0 0 1 .38 0l.703 2.162a.2.2 0 0 0 .19.138h2.274a.2.2 0 0 1 .118.362l-1.84 1.336a.2.2 0 0 0-.072.224l.702 2.162a.2.2 0 0 1-.307.224l-1.84-1.337a.2.2 0 0 0-.235 0l-1.84 1.337a.2.2 0 0 1-.307-.224l.702-2.162a.2.2 0 0 0-.072-.224l-1.84-1.336a.2.2 0 0 1 .118-.362h2.274a.2.2 0 0 0 .19-.138l.702-2.162ZM19.215 12.772a.2.2 0 0 1 .38 0l.576 1.771a.2.2 0 0 0 .19.138h1.863a.2.2 0 0 1 .117.362l-1.507 1.095a.2.2 0 0 0-.072.223l.575 1.772a.2.2 0 0 1-.307.224l-1.507-1.095a.2.2 0 0 0-.235 0l-1.507 1.095a.2.2 0 0 1-.308-.224l.576-1.771a.2.2 0 0 0-.073-.224l-1.507-1.095a.2.2 0 0 1 .118-.362h1.862a.2.2 0 0 0 .19-.138l.576-1.771Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.283v20"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M4.96 6.283H12v20H4.96z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SidebarElegantFill.displayName = "SidebarElegantFill";

export default SidebarElegantFill;
