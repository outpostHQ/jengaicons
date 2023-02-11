import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SlidersHorizontalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.232 11.766a2.728 2.728 0 0 1-5.09 0c-.059.011-.12.017-.182.017h-6a1 1 0 1 1 0-2h6c.062 0 .123.006.183.016a2.728 2.728 0 0 1 5.089 0c.059-.01.12-.016.183-.016H28.96a1 1 0 1 1 0 2H16.415c-.063 0-.124-.006-.183-.017Zm6.182 13.744c1.16 0 2.15-.723 2.545-1.744.06.011.12.017.183.017h3.818a1 1 0 1 0 0-2h-3.818c-.063 0-.124.006-.183.017a2.728 2.728 0 0 0-5.09 0c-.058-.011-.12-.017-.182-.017H4.96a1 1 0 1 0 0 2h14.727a.998.998 0 0 0 .183-.017 2.728 2.728 0 0 0 2.544 1.744Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

SlidersHorizontalFill.displayName = "SlidersHorizontalFill";

export default SlidersHorizontalFill;
