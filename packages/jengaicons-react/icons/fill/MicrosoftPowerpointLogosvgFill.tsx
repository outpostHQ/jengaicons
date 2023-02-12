import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrosoftPowerpointLogosvgFill = forwardRef<
  SVGSVGElement,
  JengaIconProps
>((props, ref) => {
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
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.44 23.144v4.8M17.44 4.904v4.8M19.36 16.424h9.6M8.08 9.704a11.52 11.52 0 1 1 0 13.44"
      />
      <path
        fill={color || "#000000"}
        fillRule="evenodd"
        d="M5.96 9.704a1 1 0 0 0-1 1v11.44a1 1 0 0 0 1 1h12.4a1 1 0 0 0 1-1v-11.44a1 1 0 0 0-1-1H5.96Zm4.3 2.678a1.02 1.02 0 0 0-1.02 1.02V19.466a1 1 0 1 0 2 0v-1.14h.92a2.92 2.92 0 0 0 2.92-2.92v-.053a2.972 2.972 0 0 0-2.972-2.972h-1.849Zm1.9 3.945h-.92v-1.945h.868c.537 0 .972.436.972.973v.052a.92.92 0 0 1-.92.92Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

MicrosoftPowerpointLogosvgFill.displayName = "MicrosoftPowerpointLogosvgFill";

export default MicrosoftPowerpointLogosvgFill;
