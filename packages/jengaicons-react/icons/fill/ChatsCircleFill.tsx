import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChatsCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.264 21.815a8.304 8.304 0 1 0-7.38-4.492c.057.11.075.235.047.355l-.783 3.336a.5.5 0 0 0 .61.599l3.228-.82a.517.517 0 0 1 .37.047 8.267 8.267 0 0 0 3.908.975Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M12.834 21.85a8.308 8.308 0 0 0 11.73 4.534.517.517 0 0 1 .37-.047l3.228.82a.5.5 0 0 0 .61-.6l-.783-3.335a.517.517 0 0 1 .046-.356 8.305 8.305 0 0 0-6.634-12.083"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChatsCircleFill.displayName = "ChatsCircleFill";

export default ChatsCircleFill;
