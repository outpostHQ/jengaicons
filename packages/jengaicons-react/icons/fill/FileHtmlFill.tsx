import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileHtmlFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.108 18.486h21.703a1 1 0 0 0 1-1v-6.679a1 1 0 0 0-.29-.706L21.125 3.68a1 1 0 0 0-.708-.294H5.108a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.604l5.727 5.722h-5.227a.5.5 0 0 1-.5-.5Zm-2.905 10.868a1 1 0 0 1 1.125.511l1.491 2.878 1.555-2.891a1 1 0 0 1 1.88.474v6.358a1 1 0 1 1-2 0v-2.388l-.57 1.063a1 1 0 0 1-1.77-.014l-.474-.916v2.256a1 1 0 1 1-2 0v-6.36a1 1 0 0 1 .763-.971ZM4.96 20.666a1 1 0 0 1 1 1v2.179h1.9v-2.18a1 1 0 1 1 2 0V28.026a1 1 0 1 1-2 0v-2.18h-1.9v2.18a1 1 0 1 1-2 0v-6.36a1 1 0 0 1 1-1Zm6.705 0a1 1 0 0 0 0 2h.87v5.359a1 1 0 0 0 2 0v-5.36h.87a1 1 0 1 0 0-2h-3.74Zm15.49 1a1 1 0 1 0-2 0v6.358a1 1 0 0 0 1 1h2.805a1 1 0 0 0 0-2h-1.805v-5.358Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

FileHtmlFill.displayName = "FileHtmlFill";

export default FileHtmlFill;
