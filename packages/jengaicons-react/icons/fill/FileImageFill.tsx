import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileImageFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.474 4.283H6.868a1 1 0 0 0-1 1v9.982a1 1 0 0 0 1 1h12.998a1 1 0 0 1 1 1v10.018a1 1 0 0 0 1 1h3.002a1 1 0 0 0 1-1V11.704a1 1 0 0 0-.292-.705l-6.394-6.422a1 1 0 0 0-.708-.294Zm.483 7.136v-5.72l5.725 5.72h-5.725Zm-3.95 7.66a1 1 0 0 0-1.734-.035l-2 3.322-.777-1.194a1 1 0 0 0-1.713.06l-3.648 6.565a1 1 0 0 0 .874 1.486h12.907a1 1 0 0 0 .877-1.481l-4.786-8.724Zm-2.845 5.686 1.927-3.2 3.138 5.718H7.709l2.016-3.629.742 1.14a1 1 0 0 0 1.695-.029Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FileImageFill.displayName = "FileImageFill";

export default FileImageFill;
