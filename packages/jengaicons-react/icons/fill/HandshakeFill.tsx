import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HandshakeFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M7.757 7.933a.5.5 0 0 1 .683-.183l3.059 1.766 4.85-1.523a1.5 1.5 0 0 1 1.12.09l3.506 1.752h2.103c.051 0 .101.004.15.011l2.37-1.367a.5.5 0 0 1 .683.183l3.612 6.257a.5.5 0 0 1-.183.683l-3.063 1.768-5.406 5.739a1.5 1.5 0 0 1-1.454.427l-6.183-1.54a1.499 1.499 0 0 1-.56-.271l-6.006-4.68-.001-.001-2.972-1.716a.5.5 0 0 1-.183-.683l3.875-6.712Zm.65 7.643 5.783 4.506 5.796 1.442 2.65-2.813-3.272-2.36-.141.14a4 4 0 0 1-5.657 0l-.17-.168a1.5 1.5 0 0 1 .01-2.13l3.98-3.916-.63-.315-6.192 1.944a1.01 1.01 0 0 1-.047.013l-2.11 3.657Zm17.136.05-2.207-3.824a.998.998 0 0 1-.258.033h-4.425l-3.473 3.418a2 2 0 0 0 2.628-.175l.443-.443a1.5 1.5 0 0 1 1.938-.155l3.83 2.763 1.524-1.618Zm-16.73 5.362a1 1 0 0 1 1.41-.109l2.38 2.04 3.232.789a1 1 0 0 1-.474 1.943l-3.347-.817a1.5 1.5 0 0 1-.621-.318L8.92 22.398a1 1 0 0 1-.108-1.41Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HandshakeFill.displayName = "HandshakeFill";

export default HandshakeFill;
