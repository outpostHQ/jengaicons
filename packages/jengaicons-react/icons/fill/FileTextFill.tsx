import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileTextFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M25.96 28.283h-18a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1h11.606a1 1 0 0 1 .709.294L26.669 11a1 1 0 0 1 .291.705v15.579a1 1 0 0 1-1 1Zm-12-10.486a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-6Zm-1 5a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1Zm7.09-17.296v5.223a.5.5 0 0 0 .5.5h5.227L20.049 5.5Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FileTextFill.displayName = "FileTextFill";

export default FileTextFill;
