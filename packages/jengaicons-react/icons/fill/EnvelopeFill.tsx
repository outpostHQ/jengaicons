import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const EnvelopeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 7.283a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1h-22Zm9.017 10.603-7.306 6.428a1 1 0 1 1-1.321-1.502l7.18-6.316-7.138-6.85a.872.872 0 0 1 0-1.27.963.963 0 0 1 1.323 0l9.218 8.847 9.332-8.958a.963.963 0 0 1 1.323 0c.365.351.365.92 0 1.27l-7.14 6.852 7.137 6.279a1 1 0 0 1-1.322 1.501L19 17.777l-2.067 1.985-1.956-1.876Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

EnvelopeFill.displayName = "EnvelopeFill";

export default EnvelopeFill;
