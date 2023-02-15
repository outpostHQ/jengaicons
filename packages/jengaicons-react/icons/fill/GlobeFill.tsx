import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GlobeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M13.368 11.283c.242-1.404.58-2.658.988-3.705.426-1.092.908-1.908 1.393-2.434.484-.524.894-.685 1.211-.685.317 0 .727.16 1.21.685.485.526.968 1.342 1.394 2.434.408 1.047.746 2.301.988 3.705h-7.184Zm-2.027 0H6.048a12.032 12.032 0 0 1 7.473-6.5c-.388.605-.73 1.305-1.028 2.069-.496 1.27-.888 2.774-1.152 4.43Zm9.058-6.5c.388.605.73 1.305 1.028 2.069.496 1.27.888 2.774 1.152 4.43h5.293a12.032 12.032 0 0 0-7.473-6.499Zm.419 8.5h-7.716a31.24 31.24 0 0 0-.142 3c0 1.038.05 2.043.142 3h7.716a31.24 31.24 0 0 0 .142-3c0-1.039-.05-2.043-.142-3Zm2.009 6c.087-.968.133-1.972.133-3s-.046-2.033-.133-3h5.755c.247.959.378 1.964.378 3s-.131 2.041-.378 3h-5.755Zm-2.275 2h-7.184c.242 1.403.58 2.658.988 3.705.426 1.092.908 1.908 1.393 2.434.484.524.894.685 1.211.685.317 0 .727-.16 1.21-.685.485-.526.968-1.342 1.394-2.434.408-1.047.746-2.302.988-3.705Zm-9.459-2H5.338a12.022 12.022 0 0 1-.378-3c0-1.036.131-2.041.378-3h5.755a33.368 33.368 0 0 0-.133 3c0 1.028.046 2.032.133 3Zm.248 2c.264 1.657.656 3.16 1.152 4.431.297.764.64 1.463 1.028 2.069a12.032 12.032 0 0 1-7.473-6.5h5.293Zm9.058 6.5c.388-.606.73-1.305 1.028-2.069.496-1.271.888-2.774 1.152-4.431h5.293a12.032 12.032 0 0 1-7.473 6.5Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

GlobeFill.displayName = "GlobeFill";

export default GlobeFill;
