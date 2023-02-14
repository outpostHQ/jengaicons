import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HourglassSimpleLowFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M8.71 3.783a1 1 0 0 0-1 1v2.54a11 11 0 0 0 4.81 9.095l.537.365-.537.365a11 11 0 0 0-4.81 9.094v2.541a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1v-2.54a11 11 0 0 0-4.81-9.095l-.537-.365.537-.366a11 11 0 0 0 4.81-9.093V4.783a1 1 0 0 0-1-1H8.71Zm9.648 13.687c.056.06.119.111.186.154l1.73 1.178a9 9 0 0 1 3.594 4.98H10.052a9 9 0 0 1 3.594-4.98l1.73-1.178a.985.985 0 0 0 .357-.402.994.994 0 0 0 0-.878.992.992 0 0 0-.357-.402l-1.73-1.178a9 9 0 0 1-3.937-7.44V5.783h14.502v1.54a9 9 0 0 1-3.937 7.441l-1.73 1.178a.993.993 0 0 0-.357.402.994.994 0 0 0 0 .878c.043.09.1.173.17.247Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HourglassSimpleLowFill.displayName = "HourglassSimpleLowFill";

export default HourglassSimpleLowFill;
