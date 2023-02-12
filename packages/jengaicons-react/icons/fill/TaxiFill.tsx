import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TaxiFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M13.899 4.586a1 1 0 0 1 .931-.636h4.26a1 1 0 0 1 .932.636l1.61 4.116a.912.912 0 0 1 .02.056h1.725l4.856 7.008H5.677l4.856-7.008h1.735l.02-.056 1.61-4.116Zm1.614 1.364-.829 2.116h4.552l-.828-2.116h-2.896Zm12.72 11.826H5.677v8.839a1 1 0 0 0 1 1h3.712a1 1 0 0 0 1-1V23.33H22.53v3.285a1 1 0 0 0 1 1h3.702a1 1 0 0 0 1-1v-8.839ZM8.96 20.018a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Zm12 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Zm8-2.164h-.714v-2h.714a1 1 0 1 1 0 2Zm-23.286-.087H4.96a1 1 0 1 1 0-2h.714v2Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

TaxiFill.displayName = "TaxiFill";

export default TaxiFill;
