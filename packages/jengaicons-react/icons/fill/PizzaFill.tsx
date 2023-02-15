import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PizzaFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M4.977 9.172a.91.91 0 0 0 .124.662l3.72 5.845.976 1.536v-.002l1.175 1.846-.003-.001 1.413 2.224h.004l3.809 5.985a.908.908 0 0 0 1.53 0l2.8-4.4.005.003 1.127-1.772-.005-.001 2.123-3.337.002.002 1.126-1.77-.001-.002 3.917-6.156a.91.91 0 0 0-.242-1.228 19.97 19.97 0 0 0-23.234 0 .91.91 0 0 0-.366.566Zm19.925 6.818a4.175 4.175 0 1 0-4.377 6.878l1.127-1.771a2.175 2.175 0 1 1 2.123-3.337l1.127-1.77Zm-12.516 5.291a4.175 4.175 0 1 0-4.003-6.291l.438.69.976 1.533a2.175 2.175 0 1 1 1.175 1.846l1.414 2.222ZM16.96 9.253a17.59 17.59 0 0 0-10.167 3.236l-1.075-1.69a19.59 19.59 0 0 1 22.485 0l-1.075 1.69A17.59 17.59 0 0 0 16.96 9.254Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

PizzaFill.displayName = "PizzaFill";

export default PizzaFill;
