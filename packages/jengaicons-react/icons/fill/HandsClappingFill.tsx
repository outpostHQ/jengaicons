import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HandsClappingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.478 3.817a1 1 0 0 1 .707 1.225l-.422 1.579a1 1 0 0 1-1.932-.518l.423-1.579a1 1 0 0 1 1.224-.707Zm3.402 1.586a1 1 0 0 1 .246 1.393l-.938 1.339a1 1 0 0 1-1.638-1.147l.938-1.34a1 1 0 0 1 1.392-.245ZM28.29 9.45A1 1 0 1 0 27.14 7.81l-1.338.938a1 1 0 1 0 1.147 1.638l1.339-.937Zm-17.897 3.415a.816.816 0 0 0-1.414.816l3.814 6.605a1 1 0 1 1-1.732 1l-2.332-4.038a.816.816 0 0 0-1.413.816l3.85 6.668c1.69 2.926 5.464 3.928 8.439 2.21a6.212 6.212 0 0 0 3.117-5.57v-.002l-.188-5.54a.816.816 0 0 0-1.63.093v.003l.138 2.796c.072 1.476-1.888 2.053-2.627.773l-4.036-6.99a.816.816 0 0 0-1.42.803l2.98 5.162a1 1 0 1 1-1.732 1l-2.974-5.15-.013-.022-.827-1.434Zm-2.709-3.31.77 1.185a2.816 2.816 0 0 0-1.207 3.94l.135.233a2.816 2.816 0 0 0-1.798 4.15l3.85 6.67c2.25 3.898 7.255 5.202 11.17 2.942a8.211 8.211 0 0 0 4.117-7.369v-.002l-.188-5.554-.001-.019a2.803 2.803 0 0 0-.621-1.62l-.127-3.237c-.055-1.03-.764-1.74-1.81-1.685-1.044.055-1.846.934-1.79 1.965l.113 2.294a2.828 2.828 0 0 0-.817.725L15.32 7.068a1.908 1.908 0 0 0-2.588-.684 1.855 1.855 0 0 0-.693 2.552l.75 1.302a2.8 2.8 0 0 0-.248.095l-1.457-2.697a1.953 1.953 0 0 0-3.402 1.92Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HandsClappingFill.displayName = "HandsClappingFill";

export default HandsClappingFill;
