import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BellSimpleRingingFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M24.145 3.437a1 1 0 0 0-1.067 1.692 11.535 11.535 0 0 1 4.187 4.65 1 1 0 0 0 1.793-.885 13.536 13.536 0 0 0-4.913-5.457ZM13.12 27.283a1 1 0 0 0 0 2h7.68a1 1 0 1 0 0-2h-7.68ZM11.154 3.749a1 1 0 0 1-.312 1.38 11.535 11.535 0 0 0-4.187 4.65 1 1 0 0 1-1.793-.885 13.535 13.535 0 0 1 4.913-5.457 1 1 0 0 1 1.38.312ZM7.052 22.752c-.218.341.027.801.432.801h18.952c.405 0 .65-.46.432-.801-.749-1.175-2.056-3.408-2.35-5.084a10.862 10.862 0 0 1-.117-2.491c.278-4.738-2.695-9.933-7.441-9.933s-7.719 5.195-7.441 9.933c.05.855.02 1.697-.118 2.491-.293 1.676-1.6 3.909-2.349 5.084Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

BellSimpleRingingFill.displayName = "BellSimpleRingingFill";

export default BellSimpleRingingFill;
