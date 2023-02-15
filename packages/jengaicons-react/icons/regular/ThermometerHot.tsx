import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const ThermometerHot = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M12.34 25.073a2.143 2.143 0 1 0 0-4.287 2.143 2.143 0 0 0 0 4.287ZM12.34 20.787V7.929M25.23 11.357a2.143 2.143 0 0 1-3.031 0 2.143 2.143 0 0 0-3.033 0M25.23 15.643a2.145 2.145 0 0 1-3.031 0 2.145 2.145 0 0 0-3.033 0M9.219 17.952V7.363c0-1.581 1.395-2.863 3.116-2.863s3.116 1.282 3.116 2.863v10.589"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M9.222 17.958a5.732 5.732 0 1 0 6.239 0"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ThermometerHot.displayName = "ThermometerHot";

export default ThermometerHot;
