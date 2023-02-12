import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextAlignCenterFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.729 8.99a1 1 0 1 0 0 2h18.462a1 1 0 1 0 0-2H7.729Zm2.517 4.195a1 1 0 1 0 0 2h13.427a1 1 0 0 0 0-2H10.246ZM6.73 18.38a1 1 0 0 1 1-1h18.46a1 1 0 1 1 0 2H7.73a1 1 0 0 1-1-1Zm3.517 3.196a1 1 0 1 0 0 2h13.426a1 1 0 0 0 0-2H10.246Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TextAlignCenterFill.displayName = "TextAlignCenterFill";

export default TextAlignCenterFill;
