import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileJsxFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.108 18.367h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.29-.705L22.125 3.56a1 1 0 0 0-.708-.294H6.108a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.483l5.727 5.723h-5.227a.5.5 0 0 1-.5-.5ZM9.804 20.735a1 1 0 0 1 1 1v4.614a2.933 2.933 0 1 1-5.867 0v-.272a1 1 0 1 1 2 0v.272a.933.933 0 0 0 1.867 0v-4.614a1 1 0 0 1 1-1Zm12.831.934a1 1 0 1 0-1.6 1.2l1.805 2.407-1.805 2.406a1 1 0 0 0 1.6 1.2l1.455-1.94 1.455 1.94a1 1 0 1 0 1.6-1.2l-1.805-2.406 1.805-2.407a1 1 0 0 0-1.6-1.2l-1.455 1.94-1.455-1.94Zm-7.532-.934a2.637 2.637 0 0 0-.303 5.256c.06.011.122.017.186.017h1.551a.637.637 0 1 1 0 1.274h-3.071a1 1 0 1 0 0 2h3.071a2.637 2.637 0 0 0 .074-5.274h-1.508a.637.637 0 1 1 0-1.273h3.07a1 1 0 1 0 0-2h-3.07Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FileJsxFill.displayName = "FileJsxFill";

export default FileJsxFill;
