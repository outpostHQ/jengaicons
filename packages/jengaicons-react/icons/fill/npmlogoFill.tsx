import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const npmlogoFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M2 11.178v-.5h-.5v.5H2Zm8.366 0h.5v-.5h-.5v.5ZM2 19.544h-.5v.5H2v-.5Zm4.151 0v.5h.5v-.5h-.5Zm0-5.806v-.5h-.5v.5h.5Zm1.655 0h.5v-.5h-.5v.5Zm0 5.806h-.5v.5h.5v-.5Zm2.56 0v.5h.5v-.5h-.5ZM2 11.678h8.366v-1H2v1Zm.5 7.866v-8.366h-1v8.366h1Zm3.651-.5H2v1h4.151v-1Zm.5.5v-5.806h-1v5.806h1Zm-.5-5.306h1.655v-1H6.15v1Zm1.155-.5v5.806h1v-5.806h-1Zm3.06 5.306h-2.56v1h2.56v-1Zm-.5-7.866v8.366h1v-8.366h-1Z"
        fill="#1C1B1F"
      />
      <path
        clip-rule="evenodd"
        d="M10.366 11.178h8.365v8.366h-3.663v1.56h-4.702v-9.926Zm3.966 2.56h1.654v3.215H14.33v-3.215Z"
        stroke="#1C1B1F"
      />
      <path
        d="M18.731 11.178H30v8.366h-2.524v-5.806h-1.654v5.806H24.17v-5.806h-1.655v5.806h-3.784v-8.366Z"
        stroke="#1C1B1F"
      />
    </svg>
  );
});

npmlogoFill.displayName = "npmlogoFill";

export default npmlogoFill;
