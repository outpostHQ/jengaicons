import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SelectionAllFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M6.133 4.456a1 1 0 0 0-1 1V7.26a1 1 0 1 0 2 0v-.804h.804a1 1 0 1 0 0-2H6.133Zm5.413 0a1 1 0 0 0 0 2h3.61a1 1 0 1 0 0-2h-3.61Zm7.218 0a1 1 0 1 0 0 2h3.61a1 1 0 1 0 0-2h-3.61Zm7.218 0a1 1 0 0 0 0 2h.805v.804a1 1 0 0 0 2 0V5.456a1 1 0 0 0-1-1h-1.805Zm-18.85 6.413a1 1 0 0 0-2 0v3.61a1 1 0 1 0 2 0v-3.61Zm21.655 0a1 1 0 0 0-2 0v3.61a1 1 0 0 0 2 0v-3.61ZM7.133 18.087a1 1 0 1 0-2 0v3.61a1 1 0 1 0 2 0v-3.61Zm21.654 0a1 1 0 1 0-2 0v3.61a1 1 0 0 0 2 0v-3.61ZM7.133 25.305a1 1 0 1 0-2 0v1.805a1 1 0 0 0 1 1h1.804a1 1 0 1 0 0-2h-.804v-.805Zm21.654 0a1 1 0 1 0-2 0v.805h-.805a1 1 0 0 0 0 2h1.805a1 1 0 0 0 1-1v-1.805Zm-17.24.805a1 1 0 0 0 0 2h3.608a1 1 0 1 0 0-2h-3.609Zm7.217 0a1 1 0 0 0 0 2h3.61a1 1 0 1 0 0-2h-3.61Zm-6.218-15.24a1 1 0 0 0-1 1v8.827a1 1 0 0 0 1 1h8.827a1 1 0 0 0 1-1v-8.828a1 1 0 0 0-1-1h-8.827Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SelectionAllFill.displayName = "SelectionAllFill";

export default SelectionAllFill;
