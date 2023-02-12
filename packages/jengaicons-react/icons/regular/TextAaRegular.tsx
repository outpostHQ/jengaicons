import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextAaRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.234 21.96c1.527 0 2.766-1.084 2.766-2.421 0-1.337-1.239-2.42-2.766-2.42-1.528 0-2.767 1.083-2.767 2.42s1.239 2.42 2.767 2.42ZM16.627 18.25H7.839"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M21.158 14.006H23a3 3 0 0 1 3 3v4.953M6 21.688l5.767-10.823a.5.5 0 0 1 .882-.001l5.817 10.824"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TextAaRegular.displayName = "TextAaRegular";

export default TextAaRegular;
