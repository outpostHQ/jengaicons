import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const StackOverflowLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.833 3.717a1 1 0 0 1 1.414 0l7.362 7.362a1 1 0 0 1-1.415 1.414l-7.361-7.361a1 1 0 0 1 0-1.415Zm-3.028 5.34a1 1 0 0 0-1 1.732L23.835 16a1 1 0 0 0 1-1.733l-9.03-5.211Zm-4.11 7.017a1 1 0 0 1 1.224-.707l10.059 2.697a1 1 0 0 1-.518 1.932L12.4 17.3a1 1 0 0 1-.707-1.225Zm-.947 7.139a1 1 0 0 1 1-1h10.424a1 1 0 1 1 0 2H11.748a1 1 0 0 1-1-1Zm-3.211-2.085a1 1 0 1 0-2 0v7.296a1 1 0 0 0 1 1h20.847a1 1 0 0 0 1-1v-7.296a1 1 0 1 0-2 0v6.296H7.537v-6.296Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

StackOverflowLogoFill.displayName = "StackOverflowLogoFill";

export default StackOverflowLogoFill;
