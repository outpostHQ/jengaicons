import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileJpgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.108 18.367h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.29-.705L22.125 3.56a1 1 0 0 0-.708-.294H6.108a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.484l5.727 5.723h-5.227a.5.5 0 0 1-.5-.5Zm-7.635 10.776c-.564 0-1.022.457-1.022 1.022V28.283a1 1 0 0 0 2 0v-1.884h1.483a2.958 2.958 0 0 0 0-5.916h-2.46Zm2.46 3.916h-1.482v-1.916h1.483a.958.958 0 0 1 0 1.916Zm-6.173-2.608a1 1 0 1 0-2 0v4.575a.917.917 0 1 1-1.834 0v-.269a1 1 0 1 0-2 0v.269a2.917 2.917 0 1 0 5.834 0V21.79Zm10.84 3.092a4.4 4.4 0 0 1 4.4-4.4h1.923a1 1 0 1 1 0 2h-1.922a2.4 2.4 0 1 0 0 4.8h.922v-1.272h-1.098a1 1 0 1 1 0-2h1.598a1.5 1.5 0 0 1 1.5 1.5v2.745c0 .567-.46 1.027-1.027 1.027h-1.895a4.4 4.4 0 0 1-4.4-4.4Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

FileJpgFill.displayName = "FileJpgFill";

export default FileJpgFill;
