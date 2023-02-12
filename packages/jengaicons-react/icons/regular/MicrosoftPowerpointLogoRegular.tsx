import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrosoftPowerpointLogoRegular = forwardRef<
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
        d="M16.48 22.72v4.8M16.48 4.48v4.8M18.4 16H28M7.12 9.28a11.52 11.52 0 1 1 0 13.44"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 9.28h14.4v13.44H4z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.28 16.902h1.92v0c1.06 0 1.92-.86 1.92-1.92v-.052c0-1.09-.883-1.972-1.972-1.972H9.299a.02.02 0 0 0-.019.019v6.065"
      />
    </svg>
  );
});

MicrosoftPowerpointLogoRegular.displayName = "MicrosoftPowerpointLogoRegular";

export default MicrosoftPowerpointLogoRegular;
