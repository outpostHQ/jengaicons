import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SpeakerXFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M19.097 26.422V7.179a.5.5 0 0 0-.813-.39l-6.255 5.023v10.251l6.266 4.757a.5.5 0 0 0 .802-.398Zm-9.068-4.994v-8.944h-.597a4.472 4.472 0 0 0 0 8.944h.597Zm19.638-7.852a1 1 0 0 1 0 1.414l-1.793 1.793 1.793 1.793a1 1 0 0 1-1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 1 1 1.414-1.414l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

SpeakerXFill.displayName = "SpeakerXFill";

export default SpeakerXFill;
