import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MusicNotesPlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.08 4.783a1 1 0 1 0-2 0v1.88H23.2a1 1 0 1 0 0 2h1.88v1.88a1 1 0 1 0 2 0v-1.88h1.88a1 1 0 1 0 0-2h-1.88v-1.88ZM11.68 14.206V8.697l6.76-1.776c.432 2.518 1.157 3.46 2.732 4.879l-9.492 2.406Zm12 10.718a3.368 3.368 0 0 0 3.36-3.377 3.368 3.368 0 0 0-3.36-3.376 3.368 3.368 0 0 0-3.36 3.376 3.368 3.368 0 0 0 3.36 3.377ZM8.32 28.783a3.368 3.368 0 0 0 3.36-3.377 3.368 3.368 0 0 0-3.36-3.376 3.368 3.368 0 0 0-3.36 3.376 3.368 3.368 0 0 0 3.36 3.377Z"
          clipRule="evenodd"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m11.68 8.697-.254-.967a1 1 0 0 0-.746.967h1Zm0 5.51h-1a1 1 0 0 0 1.246.968l-.246-.969Zm6.76-7.286.985-.17a1 1 0 0 0-1.24-.797l.254.967Zm2.732 4.879.246.969a1 1 0 0 0 .423-1.713l-.669.744ZM10.68 25.462a1 1 0 1 0 2 0h-2Zm1-11.256h1a1 1 0 0 0-1.246-.97l.246.97Zm16.36.399a1 1 0 0 0-2 0h2Zm-2 6.757a1 1 0 1 0 2 0h-2Zm-14.61-8.124a1 1 0 0 0 .492 1.939l-.492-1.94Zm-.75-4.54v5.508h2V8.697h-2Zm7.505-2.744-6.76 1.776.51 1.935 6.759-1.776-.509-1.935Zm3.656 5.102c-.77-.693-1.252-1.2-1.604-1.794-.348-.586-.608-1.322-.812-2.51l-1.971.339c.229 1.33.548 2.323 1.063 3.192.512.862 1.18 1.534 1.986 2.26l1.338-1.487Zm-9.915 4.12 9.492-2.407-.492-1.939-9.492 2.407.492 1.938Zm14.114 6.371a2.368 2.368 0 0 1-2.36 2.377v2c2.412 0 4.36-1.964 4.36-4.377h-2Zm-2.36-2.376c1.299 0 2.36 1.059 2.36 2.376h2c0-2.412-1.948-4.376-4.36-4.376v2Zm-2.36 2.376a2.368 2.368 0 0 1 2.36-2.376v-2c-2.413 0-4.36 1.964-4.36 4.376h2Zm2.36 2.377a2.368 2.368 0 0 1-2.36-2.377h-2c0 2.413 1.947 4.377 4.36 4.377v-2Zm-13 1.482a2.368 2.368 0 0 1-2.36 2.377v2c2.413 0 4.36-1.964 4.36-4.377h-2ZM8.32 23.03c1.299 0 2.36 1.06 2.36 2.376h2c0-2.412-1.947-4.376-4.36-4.376v2Zm-2.36 2.376a2.368 2.368 0 0 1 2.36-2.376v-2c-2.413 0-4.36 1.964-4.36 4.376h2Zm2.36 2.377a2.368 2.368 0 0 1-2.36-2.377h-2c0 2.413 1.947 4.377 4.36 4.377v-2Zm4.36-2.321V14.206h-2v11.256h2Zm13.36-10.857v6.757h2v-6.757h-2Zm-14.118.572.004-.002-.492-1.938h-.004l.492 1.94Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MusicNotesPlusFill.displayName = "MusicNotesPlusFill";

export default MusicNotesPlusFill;
