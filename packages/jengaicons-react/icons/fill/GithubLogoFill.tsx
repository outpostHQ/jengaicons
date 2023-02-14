import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GithubLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.122 29.23c5.651-1.411 9.838-6.523 9.838-12.612 0-7.18-5.82-13-13-13s-13 5.82-13 13c0 6.09 4.186 11.2 9.838 12.613a3.244 3.244 0 0 1-.067-.658V25.77c-.975.288-3.143.444-4.163-1.202-.203-.536-.785-1.717-1.497-2.158-.89-.551-.595-.722-.462-.798.345-.09 1.214-.088 1.92.649.133.147.43.493.55.7l.01.017c.177.31 1.127 1.973 3.66 1.007l.093-.028a3.227 3.227 0 0 1 .907-1.51 12.708 12.708 0 0 1-1.784-.385c-2.464-.616-4.27-2.82-4.27-5.852 0-1.638.514-2.915 1.352-3.91-.519-1.196-.118-2.716.151-3.333 1.182-.155 2.84.845 3.446 1.26.987-.235 2.125-.357 3.388-.357 1.186 0 2.308.124 3.295.35.663-.437 2.235-1.407 3.42-1.24.269.58.674 2.023.2 3.26a6.262 6.262 0 0 1 1.391 3.97c0 2.42-1.339 4.554-3.254 5.46-.816.356-1.807.626-2.907.783a3.22 3.22 0 0 1 1.012 2.347v3.773c0 .225-.023.445-.067.658Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GithubLogoFill.displayName = "GithubLogoFill";

export default GithubLogoFill;
