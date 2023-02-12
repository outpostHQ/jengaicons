import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EnvelopeSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color } = props;

    return (
      <svg
        style={{ width: size || 32, height: size || 32 }}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M5.96 7.283a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1h-22Zm21.628 2.252a.872.872 0 0 0 0-1.27.963.963 0 0 0-1.323 0l-9.332 8.958-9.218-8.847a.963.963 0 0 0-1.323 0 .872.872 0 0 0 0 1.27l10.54 10.116L27.589 9.535Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

EnvelopeSimpleFill.displayName = "EnvelopeSimpleFill";

export default EnvelopeSimpleFill;
