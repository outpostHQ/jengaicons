import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileZipFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.109 18.367h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.291-.705L22.127 3.56a1 1 0 0 0-.709-.294H6.108a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1ZM21.9 9.707V4.484l5.728 5.723H22.4a.5.5 0 0 1-.5-.5ZM6.642 21.955a1 1 0 0 1 1-1h4.06a1 1 0 0 1 .83 1.557l-3.016 4.497h2.185a1 1 0 0 1 0 2H7.642a1 1 0 0 1-.83-1.556l3.015-4.498H7.642a1 1 0 0 1-1-1Zm11.318 0a1 1 0 0 0-2 0v6.215a1 1 0 1 0 2 0v-6.215Zm4.203-1c-.565 0-1.023.458-1.023 1.024V28.17a1 1 0 0 0 2 0v-1.636h2.01a2.79 2.79 0 0 0 0-5.58h-2.986Zm2.987 3.579h-2.01v-1.58h2.01a.79.79 0 1 1 0 1.58Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FileZipFill.displayName = "FileZipFill";

export default FileZipFill;
