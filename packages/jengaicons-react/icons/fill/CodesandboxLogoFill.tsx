import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CodesandboxLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.448 3.552a1 1 0 0 0-.976 0l-10.724 6a1 1 0 0 0-.512.873v11.999a1 1 0 0 0 .512.872l10.724 6.001a1 1 0 0 0 .976 0l10.724-6a1 1 0 0 0 .512-.873V10.425a1 1 0 0 0-.512-.872L17.448 3.552ZM7.236 12.058v4.807l3.704 2.18a1 1 0 0 1 .493.861v4.28l4.646 2.6v-9.803l-8.843-4.925Zm10.843 4.975v9.62l4.385-2.454v-4.62a1 1 0 0 1 .493-.862l3.727-2.194v-4.378l-8.605 4.888Zm7.57-6.6L21.697 8.22l-4.42 2.26a1 1 0 0 1-.916-.003l-4.233-2.203-3.779 2.114 8.774 4.887 8.526-4.844Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CodesandboxLogoFill.displayName = "CodesandboxLogoFill";

export default CodesandboxLogoFill;
