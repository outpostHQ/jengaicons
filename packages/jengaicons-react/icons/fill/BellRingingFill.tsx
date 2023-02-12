import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BellRingingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.145 3.437a1 1 0 0 0-1.067 1.692 11.535 11.535 0 0 1 4.187 4.65 1 1 0 0 0 1.793-.885 13.536 13.536 0 0 0-4.913-5.457ZM12.12 23.553H7.484c-.405 0-.65-.46-.432-.801.749-1.175 2.056-3.408 2.349-5.084.139-.794.168-1.636.118-2.491-.278-4.738 2.695-9.933 7.441-9.933s7.719 5.195 7.441 9.933c-.05.855-.02 1.697.118 2.491.293 1.676 1.6 3.909 2.349 5.084.218.341-.027.801-.432.801H21.8v.946a4.756 4.756 0 0 1-1.423 3.388 4.869 4.869 0 0 1-3.417 1.396c-1.279 0-2.508-.5-3.417-1.396a4.756 4.756 0 0 1-1.423-3.388v-.946Zm2 0v.946c0 .734.296 1.44.827 1.963.531.524 1.255.82 2.013.82s1.482-.296 2.013-.82c.531-.523.827-1.23.827-1.963v-.946h-5.68ZM11.154 3.75a1 1 0 0 1-.312 1.38 11.535 11.535 0 0 0-4.187 4.65 1 1 0 0 1-1.793-.885 13.535 13.535 0 0 1 4.913-5.457 1 1 0 0 1 1.38.312Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BellRingingFill.displayName = "BellRingingFill";

export default BellRingingFill;
