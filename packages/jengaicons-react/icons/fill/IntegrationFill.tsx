import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const IntegrationFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          d="m14.778 12.576 3.705 3.705-3.705 3.705M18.484 16.28H5.59"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M19.539 28.042a.5.5 0 0 0 .683.183l3.64-2.102a.5.5 0 0 0 .184-.683l-1.13-1.957a.517.517 0 0 1 .072-.606 9.776 9.776 0 0 0 2.096-3.627.518.518 0 0 1 .49-.365h2.256a.5.5 0 0 0 .5-.5V14.18a.5.5 0 0 0-.5-.5h-2.256a.518.518 0 0 1-.49-.365 9.777 9.777 0 0 0-2.097-3.628.517.517 0 0 1-.071-.606l1.129-1.956a.5.5 0 0 0-.183-.683l-3.64-2.102a.5.5 0 0 0-.684.183L18.41 6.478a.517.517 0 0 1-.56.242 9.824 9.824 0 0 0-4.192 0 .517.517 0 0 1-.56-.242L11.97 4.524a.5.5 0 0 0-.683-.183l-3.64 2.102a.5.5 0 0 0-.184.683l1.13 1.956c.112.195.08.44-.072.606a9.791 9.791 0 0 0-1.868 2.986h3.952a6.288 6.288 0 1 1-.04 7.16H6.63a9.79 9.79 0 0 0 1.89 3.044.517.517 0 0 1 .072.606l-1.13 1.956a.5.5 0 0 0 .184.683l3.64 2.102a.5.5 0 0 0 .683-.183l1.129-1.955a.517.517 0 0 1 .56-.24 9.826 9.826 0 0 0 4.192 0 .517.517 0 0 1 .56.24l1.129 1.955Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

IntegrationFill.displayName = "IntegrationFill";

export default IntegrationFill;
