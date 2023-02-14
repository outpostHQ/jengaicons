import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileVideoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.566 4.283H7.96a1 1 0 0 0-1 1v9.982a1 1 0 0 0 1 1h12.998a1 1 0 0 1 1 1v10.018a1 1 0 0 0 1 1h3.002a1 1 0 0 0 1-1V11.704a1 1 0 0 0-.291-.705l-6.395-6.422a1 1 0 0 0-.708-.294Zm.483 7.136v-5.72l5.725 5.72H20.05ZM5.46 20.283a1 1 0 0 1 1-1h6.75a4.001 4.001 0 0 1 3.747 2.597l1.962-1.262a1 1 0 0 1 1.54.841v5.647a1 1 0 0 1-1.54.842l-1.709-1.1v1.435a1 1 0 0 1-1 1H9.46a4 4 0 0 1-4-4v-5Zm13 3.008-1.25.804v.376l1.25.804V23.29Zm-3.25-.008v4H9.46a2 2 0 0 1-2-2v-4h5.75a2 2 0 0 1 2 2Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FileVideoFill.displayName = "FileVideoFill";

export default FileVideoFill;
