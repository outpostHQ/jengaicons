import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PlanetFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 26.154a9.37 9.37 0 0 0 9.367-9.633c-1.577 1.662-3.899 3.448-6.626 5.025-2.717 1.571-5.41 2.692-7.628 3.234a9.327 9.327 0 0 0 4.887 1.373Zm8.829-12.011.125-.133a9.36 9.36 0 0 0-2.108-3.625c1.155-.277 2.12-.385 2.851-.342.891.052 1.173.303 1.247.427.06.106.136.407-.153 1.068-.281.644-.975 1.552-1.812 2.46l.438 2.506 1.17-1.256c.915-.992 1.631-1.982 2.037-2.91.395-.905.578-1.956.052-2.869l-.004-.006c-.588-1.005-1.747-1.352-2.858-1.417-1.157-.067-2.565.144-4.094.564l-.816.186A9.37 9.37 0 0 0 7.597 17.15l-.189.164c-.16.14-.307.266-.394.334-1.126 1.115-2.013 2.23-2.532 3.265-.498.994-.779 2.173-.197 3.184l.002.003c.53.911 1.53 1.28 2.513 1.39 1.007.112 2.223-.014 3.54-.31.392-.073 1.286-.25 1.723-.368l-2.007-1.627c-1.206.271-2.334.395-3.033.317-.72-.081-.943-.298-1.006-.405-.068-.12-.149-.485.253-1.287.329-.655.906-1.44 1.722-2.302a9.36 9.36 0 0 0 2.112 3.662l.197-.042v-.001l.976-.216c2.033-.448 4.681-1.51 7.423-3.096 2.763-1.598 5.017-3.382 6.418-4.93l.665-.736.006-.007Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

PlanetFill.displayName = "PlanetFill";

export default PlanetFill;
