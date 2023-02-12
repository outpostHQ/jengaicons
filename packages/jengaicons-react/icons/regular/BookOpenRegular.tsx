import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BookOpenRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5.753H4v16.745h7.633a4 4 0 0 1 3.557 2.173l.621 1.208c.048.093.189.059.189-.046V9.753a4 4 0 0 0-4-4ZM20 5.753h8v16.745h-7.633a4 4 0 0 0-3.557 2.173l-.621 1.208c-.048.093-.189.059-.189-.046V9.753a4 4 0 0 1 4-4Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BookOpenRegular.displayName = "BookOpenRegular";

export default BookOpenRegular;
