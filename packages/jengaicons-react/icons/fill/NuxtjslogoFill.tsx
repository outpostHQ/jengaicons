import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NuxtjslogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          d="m24.683 24.698.023-.047a.56.56 0 0 0 .055-.118v-.003c.074-.195.09-.402.055-.61v.007a1.776 1.776 0 0 0-.235-.62l.008.007-5.321-9.357-.813-1.418-6.117 10.775c-.106.187-.172.39-.207.601v.012c-.043.243-.016.489.082.715l-.004-.007c.012.035.031.066.05.101l-.003-.004c.16.274.5.602 1.25.602h9.9c.156 0 .925-.032 1.28-.637h-.003Zm-6.227-9.318 4.86 8.548H13.6l4.856-8.548Zm10.25 7.935-7.016-12.36c-.074-.133-.476-.79-1.183-.79-.317 0-.77.138-1.141.786l-.906 1.59.805 1.422 1.25-2.214 6.942 12.184h-2.641c.035.204.016.41-.055.606v-.008c-.016.043-.031.086-.055.126v-.004l-.023.047c-.355.605-1.121.637-1.27.637h4.13c.152 0 .914-.032 1.27-.637.16-.278.268-.738-.107-1.383v-.002Zm-16.442 1.418-.047-.094v-.003a1.25 1.25 0 0 1-.086-.715v.007H6.458l8.43-14.833 2.766 4.863.805-1.418-2.414-4.25c-.067-.121-.473-.778-1.177-.778-.316 0-.773.137-1.14.79l-8.54 15.013c-.074.129-.426.808-.074 1.413.16.278.5.602 1.25.602h7.15c-.743 0-1.09-.32-1.251-.601l.001.004Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

NuxtjslogoFill.displayName = "NuxtjslogoFill";

export default NuxtjslogoFill;
