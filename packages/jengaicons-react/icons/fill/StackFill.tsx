import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const StackFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m17.216 15.949 9.235-5.496a.5.5 0 0 0-.012-.866L17.204 4.42a.5.5 0 0 0-.488 0L7.481 9.587a.5.5 0 0 0-.011.866l9.235 5.496a.5.5 0 0 0 .51 0Zm-11.35-.36a1 1 0 0 1 1.37-.347l9.724 5.786 9.724-5.786a1 1 0 1 1 1.023 1.718l-10.235 6.091a1 1 0 0 1-1.023 0l-10.235-6.09a1 1 0 0 1-.348-1.371Zm1.37 5.744a1 1 0 0 0-1.022 1.718l10.235 6.091a1 1 0 0 0 1.023 0l10.235-6.09a1 1 0 0 0-1.023-1.72L16.96 27.12l-9.723-5.786Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

StackFill.displayName = "StackFill";

export default StackFill;
