import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextIndentFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.072 8.863a1 1 0 1 0-1.414 1.414l2.853 2.853-2.853 2.853a1 1 0 1 0 1.414 1.414l3.56-3.56a1 1 0 0 0 0-1.414l-3.56-3.56Zm17.119-.293H15.282a1 1 0 1 0 0 2h10.909a1 1 0 1 0 0-2Zm-10.909 6.713a1 1 0 1 0 0 2h10.909a1 1 0 1 0 0-2H15.282Zm-8.553 7.713a1 1 0 0 1 1-1h18.462a1 1 0 0 1 0 2H7.729a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TextIndentFill.displayName = "TextIndentFill";

export default TextIndentFill;
