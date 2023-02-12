import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const IntegrationRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.13 21.674a5.673 5.673 0 1 0 0-11.347"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M12.356 4.5a1 1 0 0 0-1.366-.366L6.924 6.48a1 1 0 0 0-.366 1.366l1.05 1.82a9.824 9.824 0 0 0-1.69 2.889h2.176a7.853 7.853 0 0 1 1.458-2.054A1 1 0 0 0 9.706 9.3L8.79 7.713l2.334-1.347.915 1.585a1 1 0 0 0 1.117.468c.63-.164 1.291-.25 1.974-.25s1.344.086 1.974.25a1 1 0 0 0 1.117-.468l.915-1.585 2.335 1.347-.917 1.587a1 1 0 0 0 .154 1.202 7.824 7.824 0 0 1 1.974 3.416 1 1 0 0 0 .965.735h1.83v2.695h-1.83a1 1 0 0 0-.965.734 7.822 7.822 0 0 1-1.974 3.415 1 1 0 0 0-.154 1.203l.917 1.587-2.335 1.347-.915-1.585a1 1 0 0 0-1.117-.468c-.63.163-1.29.25-1.974.25a7.85 7.85 0 0 1-1.974-.25 1 1 0 0 0-1.117.468l-.915 1.585-2.334-1.347.916-1.587a1 1 0 0 0-.154-1.203 7.852 7.852 0 0 1-1.485-2.108H5.898a9.823 9.823 0 0 0 1.71 2.943l-1.05 1.82a1 1 0 0 0 .366 1.367l4.066 2.347a1 1 0 0 0 1.366-.366l1.05-1.82a9.89 9.89 0 0 0 3.448 0l1.05 1.82a1 1 0 0 0 1.366.366l4.067-2.347a1 1 0 0 0 .366-1.366l-1.052-1.82a9.825 9.825 0 0 0 1.726-2.985h2.1a1 1 0 0 0 1-1v-4.695a1 1 0 0 0-1-1h-2.1a9.824 9.824 0 0 0-1.726-2.985l1.052-1.82a1 1 0 0 0-.366-1.367L19.27 4.134a1 1 0 0 0-1.366.366l-1.05 1.819a9.887 9.887 0 0 0-3.448 0l-1.05-1.82Z"
          clip-rule="evenodd"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.464 12.464 16 16l-3.536 3.535M16 16H4.523"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

IntegrationRegular.displayName = "IntegrationRegular";

export default IntegrationRegular;
