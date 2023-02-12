import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BooksFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M11.09 4.225a1 1 0 0 0-1 1v22.478a1 1 0 0 0 1 1h6.13a1 1 0 0 0 1-1V5.225a1 1 0 0 0-1-1h-6.13Zm5.13 17.37V6.225h-4.13v15.37h4.13Zm-4.13 2h4.13v3.108h-4.13v-3.108Z"
        clip-rule="evenodd"
      />
      <path
        fill={color || "#000000"}
        d="m17.2 6.178 5.942-1.544 5.832 21.777-5.935 1.522L17.2 6.178Z"
      />
      <path
        fill={color || "#000000"}
        d="m27.67 21.533-5.922 1.587 1.29 4.813 5.936-1.522-1.304-4.878ZM24.47 9.568l-5.921 1.587L17.2 6.178l5.941-1.544 1.328 4.934Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m17.2 6.178 5.942-1.544m-5.941 1.544 5.838 21.755M17.2 6.178l1.348 4.977 5.921-1.587-1.328-4.934m0 0 5.832 21.777m0 0-5.935 1.522m5.934-1.522-1.303-4.878-5.922 1.587 1.29 4.813"
      />
      <path
        fill={color || "#000000"}
        fillRule="evenodd"
        d="M11.09 5.225H4.96v22.478h6.13v-17.37H4.995V5.226h6.095Z"
        clip-rule="evenodd"
      />
      <path
        fill={color || "#000000"}
        d="M4.96 5.225v-1a1 1 0 0 0-1 1h1Zm6.13 0h1a1 1 0 0 0-1-1v1ZM4.96 27.703h-1a1 1 0 0 0 1 1v-1Zm6.13 0v1a1 1 0 0 0 1-1h-1Zm0-17.37h1a1 1 0 0 0-1-1v1Zm-6.095 0h-1a1 1 0 0 0 1 1v-1Zm0-5.108v-1a1 1 0 0 0-1 1h1Zm6.095 0v1a1 1 0 0 0 1-1h-1Zm-6.13 1h6.13v-2H4.96v2Zm1 21.478V5.225h-2v22.478h2Zm5.13-1H4.96v2h6.13v-2Zm-1-16.37v17.37h2v-17.37h-2Zm1-1H4.995v2h6.095v-2Zm-5.095 1V5.226h-2v5.109h2Zm-1-4.108h6.095v-2H4.995v2Zm5.095-1h2-2Z"
      />
    </svg>
  );
});

BooksFill.displayName = "BooksFill";

export default BooksFill;
