import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const WifiSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.961 5.283a1 1 0 0 1 1.413.068L11.2 8.46c.015.014.029.03.042.045l4.108 4.518.043.048 6.077 6.684.04.045 5.517 6.069a1 1 0 1 1-1.48 1.345l-5.49-6.04a4.925 4.925 0 0 0-6.495.269 1 1 0 0 1-1.381-1.447 6.924 6.924 0 0 1 5.068-1.91l-2.964-3.26a10.414 10.414 0 0 0-4.67 2.65 1 1 0 1 1-1.402-1.427 12.414 12.414 0 0 1 4.586-2.859l-2.576-2.833a16.008 16.008 0 0 0-4.56 3.16 1 1 0 1 1-1.406-1.423 18.01 18.01 0 0 1 4.563-3.28L6.894 6.696a1 1 0 0 1 .067-1.413Zm21.296 8.234A16.01 16.01 0 0 0 16.962 8.89h-.002c-.767 0-1.533.054-2.292.161a1 1 0 1 1-.28-1.98c.851-.12 1.71-.181 2.571-.181h-.001l.002 1v-1a18.01 18.01 0 0 1 12.703 5.206 1 1 0 0 1-1.406 1.422Zm-9.454.07a1 1 0 0 1 1.212-.727 12.413 12.413 0 0 1 5.692 3.19 1 1 0 0 1-1.402 1.426A10.411 10.411 0 0 0 19.53 14.8a1 1 0 0 1-.727-1.213Zm-.443 11.09a1.399 1.399 0 1 1-2.798 0 1.399 1.399 0 0 1 2.798 0Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

WifiSlashFill.displayName = "WifiSlashFill";

export default WifiSlashFill;
