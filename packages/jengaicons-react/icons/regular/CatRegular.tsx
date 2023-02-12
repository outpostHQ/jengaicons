import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CatRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 24.595V28.5"
      />
      <path
        fill={color || "#000000"}
        d="M10.631 19.714a1.464 1.464 0 1 0 0-2.928 1.464 1.464 0 0 0 0 2.928ZM21.369 19.714a1.464 1.464 0 1 0 0-2.928 1.464 1.464 0 0 0 0 2.928Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7.024v4.881M17.952 22.643 16 24.595l-1.952-1.952M12.095 7.634v4.271M19.905 7.634v4.271"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4.286 6.452 4.88 2.929 1.022-.73a10 10 0 0 1 11.624 0l1.021.73 4.881-2.929V18.5c0 5.523-4.477 10-10 10h-3.428c-5.523 0-10-4.477-10-10V6.452Z"
      />
    </svg>
  );
});

CatRegular.displayName = "CatRegular";

export default CatRegular;
