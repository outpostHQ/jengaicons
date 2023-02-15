import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FilePdfFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.005 18.367h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.29-.705L22.022 3.56a1 1 0 0 0-.709-.294H6.005a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.484l5.727 5.723h-5.227a.5.5 0 0 1-.5-.5ZM5.07 21.705a1 1 0 0 1 1-1h2.475a2.881 2.881 0 1 1 0 5.763H7.07v1.77a1 1 0 1 1-2 0V21.706Zm2 2.763h1.475a.881.881 0 1 0 0-1.763H7.07v1.763Zm6.712-2.763a1 1 0 0 1 1-1h1.634a4.267 4.267 0 1 1 0 8.534h-1.634a1 1 0 0 1-1-1v-6.534Zm2 1v4.534h.634a2.267 2.267 0 0 0 0-4.534h-.634Zm8.042-1.979a1 1 0 0 0-1 1v6.53a1 1 0 1 0 2 0v-1.887h2.379a1 1 0 1 0 0-2h-2.379v-1.643h2.925a1 1 0 1 0 0-2h-3.925Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FilePdfFill.displayName = "FilePdfFill";

export default FilePdfFill;
