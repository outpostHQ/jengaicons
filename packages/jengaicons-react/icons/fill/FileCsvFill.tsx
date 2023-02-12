import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileCsvFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.108 18.367h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.29-.705L22.125 3.56a1 1 0 0 0-.708-.294H6.108a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.483l5.727 5.723h-5.227a.5.5 0 0 1-.5-.5Zm.642 11.142a1 1 0 0 1 1.28.602l1.435 3.986 1.566-4.01a1 1 0 0 1 1.863.727l-2.439 6.244c-.37.947-1.715.929-2.06-.027l-2.247-6.242a1 1 0 0 1 .602-1.28ZM4.747 25.036a4.246 4.246 0 0 1 4.246-4.246h1.388a1 1 0 1 1 0 2H8.993a2.247 2.247 0 0 0 0 4.493h1.388a1 1 0 1 1 0 2H8.993a4.247 4.247 0 0 1-4.246-4.247Zm11.19-4.246a2.623 2.623 0 0 0-.33 5.226c.066.013.134.02.203.02h1.515a.623.623 0 1 1 0 1.247h-3.01a1 1 0 1 0 0 2h3.01a2.623 2.623 0 0 0 .085-5.247h-1.473a.623.623 0 0 1 0-1.246h3.011a1 1 0 0 0 0-2h-3.01Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

FileCsvFill.displayName = "FileCsvFill";

export default FileCsvFill;
