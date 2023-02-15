import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ListDashesFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M7.73 8.57a1 1 0 0 0 0 2h1.678a1 1 0 1 0 0-2H7.729Zm5.873 0a1 1 0 1 0 0 2h12.588a1 1 0 1 0 0-2H13.604Zm.001 6.713a1 1 0 1 0 0 2h12.587a1 1 0 1 0 0-2H13.604Zm-1 7.713a1 1 0 0 1 1-1h12.587a1 1 0 1 1 0 2H13.604a1 1 0 0 1-1-1ZM6.73 16.283a1 1 0 0 1 1-1h1.678a1 1 0 1 1 0 2H7.73a1 1 0 0 1-1-1Zm1 5.713a1 1 0 1 0 0 2h1.678a1 1 0 0 0 0-2H7.73Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ListDashesFill.displayName = "ListDashesFill";

export default ListDashesFill;
