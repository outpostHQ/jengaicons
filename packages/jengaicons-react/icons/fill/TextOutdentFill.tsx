import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextOutdentFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.737 8.902a1 1 0 1 1 1.414 1.415l-3.008 3.007 3.008 3.008a1 1 0 0 1-1.414 1.415L7.022 14.03a1 1 0 0 1 0-1.414l3.715-3.715Zm5.019.212a1 1 0 1 0 0 2H26.19a1 1 0 1 0 0-2H15.756Zm0 6.421a1 1 0 1 0 0 2H26.19a1 1 0 1 0 0-2H15.756Zm-8.224 7.421a1 1 0 0 1 1-1H26.19a1 1 0 1 1 0 2H8.53a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TextOutdentFill.displayName = "TextOutdentFill";

export default TextOutdentFill;
