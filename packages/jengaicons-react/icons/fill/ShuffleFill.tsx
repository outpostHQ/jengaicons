import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShuffleFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M26.067 4.853a1 1 0 1 0-1.414 1.414l2.521 2.522h-.305a9 9 0 0 0-7.27 3.696l-.224.306a1 1 0 0 0 1.616 1.179l.223-.306a7 7 0 0 1 5.655-2.875h.333l-2.55 2.549a1 1 0 1 0 1.415 1.414l4.243-4.242a.997.997 0 0 0 .293-.712v-.01a.998.998 0 0 0-.4-.799l-4.136-4.136Zm0 14.367a1 1 0 0 0-1.414 1.414l2.535 2.536h-.319a7 7 0 0 1-5.655-2.875l-5.687-7.796a9 9 0 0 0-7.271-3.697H5.603a1 1 0 1 0 0 2h2.653a7 7 0 0 1 5.655 2.875l5.687 7.797a9 9 0 0 0 7.271 3.696h.32l-2.536 2.535a1 1 0 1 0 1.414 1.415l4.243-4.243a.998.998 0 0 0-.008-1.422l-4.235-4.235ZM5.603 25.156a1 1 0 1 1 0-2h2.653a7 7 0 0 0 5.655-2.875l.224-.306a1 1 0 1 1 1.616 1.178l-.224.307a9 9 0 0 1-7.271 3.696H5.603Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ShuffleFill.displayName = "ShuffleFill";

export default ShuffleFill;
