import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FlowerFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M15.505 13.692c-.86-1.828-1.746-4.068-1.746-5.549a3.36 3.36 0 0 1 6.72 0c0 1.48-.886 3.72-1.745 5.548a3.346 3.346 0 0 0-1.614-.412c-.585 0-1.136.15-1.615.413Zm-.256.156c-1.155-1.667-2.656-3.56-3.937-4.289a3.36 3.36 0 0 0-3.36 5.808c1.308.756 3.768 1.116 5.808 1.272v-.001c0-1.162.591-2.187 1.489-2.79Zm-1.474 3.105-.016-.026c-2.04.156-4.5.516-5.808 1.272a3.361 3.361 0 1 0 3.36 5.808c1.308-.744 2.844-2.7 4.008-4.392l-.132-.227a3.357 3.357 0 0 1-1.412-2.435Zm2.096 2.806h-.312c-.876 1.848-1.8 4.152-1.8 5.664a3.36 3.36 0 0 0 6.72 0c0-1.512-.924-3.816-1.8-5.664h-.31a3.35 3.35 0 0 1-1.249.24 3.35 3.35 0 0 1-1.249-.24Zm3.18-.37-.132.226c1.164 1.692 2.7 3.648 4.008 4.392a3.36 3.36 0 0 0 3.36-5.808c-1.308-.756-3.768-1.116-5.808-1.272l-.014.024a3.357 3.357 0 0 1-1.414 2.438Zm1.429-2.75c2.04-.156 4.5-.516 5.807-1.272a3.36 3.36 0 0 0-3.36-5.808c-1.281.729-2.781 2.621-3.936 4.289a3.356 3.356 0 0 1 1.489 2.791Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FlowerFill.displayName = "FlowerFill";

export default FlowerFill;
