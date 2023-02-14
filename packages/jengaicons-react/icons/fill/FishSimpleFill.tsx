import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FishSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.98 4.272a22.361 22.361 0 0 0-5.115-.483c-2.254.054-4.92.497-7.298 1.911-.277.165-.55.342-.816.533-.06.035-.116.075-.167.121-1.974 1.468-3.611 3.687-4.502 6.942-.642 2.349-.892 5.222-.62 8.73a54.884 54.884 0 0 1-4.288-.77 1 1 0 1 0-.428 1.954c1.756.384 3.396.668 4.926.861.193 1.53.477 3.17.861 4.926a1 1 0 1 0 1.954-.428 54.887 54.887 0 0 1-.77-4.288c3.508.272 6.382.022 8.73-.62 3.782-1.034 6.165-3.076 7.596-5.485 1.414-2.379 1.857-5.044 1.911-7.298.055-2.26-.28-4.176-.483-5.114l-.002-.008a1.96 1.96 0 0 0-1.481-1.482l-.008-.002Zm-5.352 12.466a10.23 10.23 0 0 0 3.49.747c.071-.11.14-.22.206-.33 1.177-1.981 1.581-4.27 1.63-6.325a20.37 20.37 0 0 0-.43-4.61 20.376 20.376 0 0 0-4.611-.432c-2.055.05-4.344.455-6.325 1.632-.11.065-.22.134-.33.205a10.229 10.229 0 0 0 6.37 9.113Zm.11-7.137a1.404 1.404 0 1 1-2.807 0 1.404 1.404 0 0 1 2.807 0Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FishSimpleFill.displayName = "FishSimpleFill";

export default FishSimpleFill;
