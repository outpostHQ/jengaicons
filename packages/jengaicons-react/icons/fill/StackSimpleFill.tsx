import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const StackSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m28.216 12.942-11 6.546a.5.5 0 0 1-.512 0l-11-6.546a.5.5 0 0 1 .012-.866l11-6.155a.5.5 0 0 1 .488 0l11 6.155a.5.5 0 0 1 .012.866Zm-22.744 5.84A1 1 0 1 0 4.449 20.5l12 7.141a1 1 0 0 0 1.022 0l12-7.141a1 1 0 0 0-1.022-1.719L16.96 25.618 5.472 18.781Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

StackSimpleFill.displayName = "StackSimpleFill";

export default StackSimpleFill;
