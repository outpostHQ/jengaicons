import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Herokulogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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

        <rect
          width="21.602"
          height="24"
          x="6.159"
          y="4.25"
          stroke={color || colorCtx || "#000000"}
          rx="2"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M18.16 11.75h2.4c1.085-1.23 1.638-2.538 1.8-3.9h-2.398c-.267 1.36-.859 2.66-1.802 3.9Zm3.156 3.171c-.485-.488-1.372-1.072-2.855-1.072-1.627 0-3.303.424-4.501.812V7.85h-2.4v10.407l1.696-.768c.041-.019 2.769-1.239 5.205-1.239 1.218 0 1.488.67 1.5 1.231v7.17h2.399v-7.2c.003-.155-.013-1.487-1.044-2.53Zm-7.055 7.328L11.56 24.65V19.85l2.702 2.4Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Herokulogo.displayName = "Herokulogo";

export default Herokulogo;
