import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChecksFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M23.267 11.123a1 1 0 0 0-1.414-1.414l-5.895 5.895a1 1 0 0 0 1.415 1.414l5.894-5.895Zm-17.6 4.453a1 1 0 0 0-1.414 1.414l5.867 5.867a1 1 0 0 0 1.414 0l.808-.808a1 1 0 1 0-1.415-1.414l-.1.1-5.16-5.159Zm24-4.453a1 1 0 0 0-1.414-1.414L17.227 20.735l-5.16-5.159a1 1 0 0 0-1.414 1.414l5.866 5.867a1 1 0 0 0 1.415 0l11.733-11.734Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

ChecksFill.displayName = "ChecksFill";

export default ChecksFill;
