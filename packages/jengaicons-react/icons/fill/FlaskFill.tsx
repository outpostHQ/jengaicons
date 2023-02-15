import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FlaskFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.008 3.955a1 1 0 1 0 0 2h.835v6.387L4.1 27.1a1 1 0 0 0 .86 1.51h24a1 1 0 0 0 .857-1.515l-8.862-14.758V5.955h.85a1 1 0 1 0 0-2h-9.797Zm2.835 8.66v-6.66h4.112v6.66a1 1 0 0 0 .143.515l4.885 8.135c-.487.282-1.1.496-1.872.548-1.134.077-2.684-.192-4.757-1.229-2.554-1.277-4.613-1.608-6.245-1.39l3.594-6.069a1 1 0 0 0 .14-.51Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FlaskFill.displayName = "FlaskFill";

export default FlaskFill;
