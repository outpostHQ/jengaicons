import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderNotchMinusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.46 6.552a1 1 0 0 0-1 1v6.272c0 .033.002.066.005.1v11.09a1 1 0 0 0 1 1H28.46a1 1 0 0 0 1-1V11.483a1 1 0 0 0-1-1H17.19l-3.638-3.638a1 1 0 0 0-.707-.293H5.46Zm1 4.692V8.552h5.97l2.556 2.556-2.456 1.716H6.46v-1.58Zm6.402 8.039a1 1 0 0 1 1-1h6.24a1 1 0 0 1 0 2h-6.24a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderNotchMinusFill.displayName = "FolderNotchMinusFill";

export default FolderNotchMinusFill;
