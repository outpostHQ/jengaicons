import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SelectionPlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M4.96 3.283a1 1 0 0 0-1 1v1.745a1 1 0 1 0 2 0v-.745h.745a1 1 0 0 0 0-2H4.96Zm5.236 0a1 1 0 0 0 0 2h3.491a1 1 0 1 0 0-2h-3.49Zm6.982 0a1 1 0 0 0 0 2h3.491a1 1 0 0 0 0-2h-3.49Zm6.982 0a1 1 0 1 0 0 2h.745v.745a1 1 0 1 0 2 0V4.283a1 1 0 0 0-1-1H24.16ZM5.96 9.519a1 1 0 1 0-2 0v3.491a1 1 0 1 0 2 0V9.52Zm20.945 0a1 1 0 1 0-2 0v3.491a1 1 0 1 0 2 0V9.52ZM5.96 16.501a1 1 0 0 0-2 0v3.491a1 1 0 1 0 2 0v-3.49Zm20.945 0a1 1 0 0 0-2 0v3.491a1 1 0 0 0 2 0v-3.49ZM5.96 23.483a1 1 0 1 0-2 0v1.745a1 1 0 0 0 1 1h1.745a1 1 0 1 0 0-2H5.96v-.745Zm18.194 2.745H22.85a1 1 0 1 1 0-2h2.054v-2.054a1 1 0 1 1 2 0v2.054h2.055a1 1 0 0 1 0 2h-2.055v2.055a1 1 0 1 1-2 0v-2.055h-.751Zm-13.958-2a1 1 0 0 0 0 2h3.491a1 1 0 1 0 0-2h-3.49Zm6.982 0a1 1 0 0 0 0 2h3.491a1 1 0 0 0 0-2h-3.49Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SelectionPlusFill.displayName = "SelectionPlusFill";

export default SelectionPlusFill;
