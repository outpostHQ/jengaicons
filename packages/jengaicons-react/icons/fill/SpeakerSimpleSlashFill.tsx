import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SpeakerSimpleSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.289 5.043A1 1 0 0 1 7.7 5.11l20 22a1 1 0 1 1-1.48 1.346l-7.124-7.837v5.803a.5.5 0 0 1-.802.398l-7.103-5.392h-1.76a4.472 4.472 0 0 1 0-8.944h2.27l-5.48-6.028a1 1 0 0 1 .067-1.413Zm18.67 7.74a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm5-1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0v-10ZM15.145 9.31l3.14-2.52a.5.5 0 0 1 .812.39v6.63l-3.953-4.5Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SpeakerSimpleSlashFill.displayName = "SpeakerSimpleSlashFill";

export default SpeakerSimpleSlashFill;
