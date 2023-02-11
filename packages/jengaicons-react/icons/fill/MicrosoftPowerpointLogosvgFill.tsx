import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrosoftPowerpointLogosvgFill = forwardRef<
  SVGSVGElement,
  JengaIconProps
>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M17.44 23.144v4.8M17.44 4.904v4.8M19.36 16.424h9.6M8.08 9.704a11.52 11.52 0 1 1 0 13.44"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M5.96 9.704a1 1 0 0 0-1 1v11.44a1 1 0 0 0 1 1h12.4a1 1 0 0 0 1-1v-11.44a1 1 0 0 0-1-1H5.96Zm4.3 2.678a1.02 1.02 0 0 0-1.02 1.02V19.466a1 1 0 1 0 2 0v-1.14h.92a2.92 2.92 0 0 0 2.92-2.92v-.053a2.972 2.972 0 0 0-2.972-2.972h-1.849Zm1.9 3.945h-.92v-1.945h.868c.537 0 .972.436.972.973v.052a.92.92 0 0 1-.92.92Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

MicrosoftPowerpointLogosvgFill.displayName = "MicrosoftPowerpointLogosvgFill";

export default MicrosoftPowerpointLogosvgFill;
