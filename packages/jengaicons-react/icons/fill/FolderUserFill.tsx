import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderUserFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.963 5.969a1 1 0 0 0-1 1v3.23a1.014 1.014 0 0 0-.003.084v16a1 1 0 0 0 1 1h9.99a1 1 0 0 0 0-2H5.96v-14h22v2.016a1 1 0 1 0 2 0v-3.016a1 1 0 0 0-1-1H17.77L14.735 6.26a1 1 0 0 0-.706-.291H4.963Zm18.99 16.308a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-3.883 3.016a4.008 4.008 0 0 1 7.767 0c.136.535-.325.99-.877.99h-6.013c-.552 0-1.012-.455-.877-.99Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderUserFill.displayName = "FolderUserFill";

export default FolderUserFill;
