import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DeviceTabletFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.96 4.283a2 2 0 0 0-2 2v.692h20v-.692a2 2 0 0 0-2-2h-16Zm-2 17.384V8.975h20v12.693h-20Zm0 2v2.616a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.616h-20Zm8.039.812a1 1 0 0 0 0 2h3.923a1 1 0 1 0 0-2h-3.924Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DeviceTabletFill.displayName = "DeviceTabletFill";

export default DeviceTabletFill;
