import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AngularLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m5.726 9.337 11.08-4.825a.5.5 0 0 1 .401 0l10.985 4.823a.5.5 0 0 1 .294.527l-1.88 13.43a.5.5 0 0 1-.268.376L17.23 28.31a.5.5 0 0 1-.449.003l-9.378-4.644a.5.5 0 0 1-.274-.386L5.43 9.86a.5.5 0 0 1 .296-.522Zm11.262 4.036 1.523 2.927h-2.99l1.467-2.927Zm3.632 6.982L19.551 18.3H14.52l.868-1.736-1.893 3.777a1 1 0 0 1-1.788-.896l4.283-8.544a1.1 1.1 0 0 1 1.96-.014l4.444 8.545a1 1 0 1 1-1.774.923Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

AngularLogosvgFill.displayName = "AngularLogosvgFill";

export default AngularLogosvgFill;
