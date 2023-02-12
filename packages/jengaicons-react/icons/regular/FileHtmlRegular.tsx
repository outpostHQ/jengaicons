import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileHtmlRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.444 21.383h-3.739M12.575 27.742v-6.36M4 21.383v6.359M7.9 21.383v6.359M4 24.562h3.9M25.195 21.383v6.359H28M4.757 17.005V4.258H18.59l7.413 7.445v5.302"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.66 11.63V4.395l7.244 7.237H18.66ZM17.273 27.742v-6.36l2.363 4.56 2.452-4.56v6.36"
        />
      </svg>
    );
  }
);

FileHtmlRegular.displayName = "FileHtmlRegular";

export default FileHtmlRegular;
