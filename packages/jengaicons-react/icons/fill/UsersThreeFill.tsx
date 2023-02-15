import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UsersThreeFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M10.068 15.478c.104-.001.208-.006.31-.014a7.798 7.798 0 0 1 3.344-5.158 3.893 3.893 0 0 0-7.568 1.28 3.892 3.892 0 0 0 3.869 3.892 5.199 5.199 0 0 0-5.08 4.202c-.105.543.353.994.905.994h5.458a7.76 7.76 0 0 1-1.04-3.891c0-.441.037-.874.107-1.295a5.228 5.228 0 0 0-.305-.01Zm6.922 5.196a3.891 3.891 0 1 0-.06 0 5.199 5.199 0 0 0-5.072 4.203c-.105.542.353.994.905.994h8.394c.552 0 1.01-.452.905-.994a5.198 5.198 0 0 0-5.072-4.203Zm5.626 0h5.456c.552 0 1.01-.452.905-.994a5.199 5.199 0 0 0-5.074-4.202 3.892 3.892 0 1 0-3.703-5.172 7.798 7.798 0 0 1 3.344 5.158c.1.008.202.013.304.014-.1 0-.2.003-.3.01.07.42.107.854.107 1.295a7.76 7.76 0 0 1-1.039 3.891Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

UsersThreeFill.displayName = "UsersThreeFill";

export default UsersThreeFill;
