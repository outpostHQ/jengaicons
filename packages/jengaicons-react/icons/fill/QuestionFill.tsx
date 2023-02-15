import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const QuestionFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 28.283c6.627 0 12-5.373 12-12s-5.373-12-12-12c-6.628 0-12 5.373-12 12s5.372 12 12 12Zm0-5.931a1.38 1.38 0 1 0 0-2.759 1.38 1.38 0 0 0 0 2.759Zm-2.083-9.055a2.083 2.083 0 1 1 2.083 2.083 1 1 0 0 0-1 1v1.44a1 1 0 1 0 2 0v-.564a4.084 4.084 0 0 0-1-8.042 4.083 4.083 0 0 0-4.083 4.083 1 1 0 0 0 2 0Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

QuestionFill.displayName = "QuestionFill";

export default QuestionFill;
