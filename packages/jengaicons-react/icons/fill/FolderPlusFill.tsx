import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderPlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.46 5.783a1 1 0 0 0-1 1v4.906c0 .032.001.063.004.095v13.999a1 1 0 0 0 1 1H28.46a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1H18.01L14.235 6.15a1 1 0 0 0-.775-.368h-8Zm1 4.906V7.783h6.525l2.37 2.906H6.46Zm7.378 7.094a1 1 0 1 0 0 2h2.125v2.125a1 1 0 1 0 2 0v-2.125h2.125a1 1 0 1 0 0-2h-2.125v-2.125a1 1 0 1 0-2 0v2.125h-2.125Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderPlusFill.displayName = "FolderPlusFill";

export default FolderPlusFill;
