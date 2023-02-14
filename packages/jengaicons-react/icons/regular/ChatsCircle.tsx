import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const ChatsCircle = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          d="M12.304 21.532a8.304 8.304 0 1 0-7.38-4.492c.057.11.075.235.047.355l-.783 3.336a.5.5 0 0 0 .61.599l3.228-.82a.517.517 0 0 1 .37.047 8.267 8.267 0 0 0 3.908.975Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M11.874 21.567a8.308 8.308 0 0 0 11.73 4.534.517.517 0 0 1 .37-.047l3.228.82a.5.5 0 0 0 .61-.6l-.783-3.335a.516.516 0 0 1 .047-.355A8.305 8.305 0 0 0 20.44 10.5"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChatsCircle.displayName = "ChatsCircle";

export default ChatsCircle;
