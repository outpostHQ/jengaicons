import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileRsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.998 28H26V11.008L19.021 4H6v11.982"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.09 10.94V4.129l6.818 6.813h-6.819Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 21.543h-3.03c-.89 0-1.614.722-1.614 1.614v0c0 .892.723 1.614 1.615 1.614h1.488M14.855 24.771h1.53c.892 0 1.615.723 1.615 1.615v0c0 .891-.723 1.614-1.614 1.614h-3.03M6 25.261h2.774a1.86 1.86 0 0 0 1.86-1.86v0a1.86 1.86 0 0 0-1.86-1.858h-2.75a.023.023 0 0 0-.024.023V28M7.01 25.33 10.634 28"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FileRsRegular.displayName = "FileRsRegular";

export default FileRsRegular;
