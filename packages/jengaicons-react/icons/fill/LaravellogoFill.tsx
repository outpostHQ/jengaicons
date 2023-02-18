import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LaravellogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.548 4 4.85 6.72l-.165 15.824L14.114 28l9.313-5.456v-5.06l4.533-2.605V9.374l-4.846-2.852-4.88 2.852v5.06l-3.873 2.209V6.72L9.548 4Zm-.342 5.83-3.77-2.167V22.16l8.24 4.806v-4.33l-4.47-2.62V9.83Zm.739-.005L13.69 7.68v9.367L9.945 19.26V9.824Zm8.66 5.226-8.17 4.755 3.661 2.186 8.2-4.81-3.69-2.131Zm-4.169 7.628 8.188-4.745v4.276l-8.188 4.741V22.68Zm8.257-10.285-3.703-2.148v4.163l3.703 2.214v-4.23Zm-3.349-2.838 3.743-2.177 3.65 2.177-3.65 2.209-3.743-2.209Zm7.861.656-3.767 2.175v4.271l3.767-2.254v-4.192ZM5.838 7.008 9.61 4.844l3.719 2.164-3.719 2.178-3.77-2.178Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LaravellogoFill.displayName = "LaravellogoFill";

export default LaravellogoFill;
