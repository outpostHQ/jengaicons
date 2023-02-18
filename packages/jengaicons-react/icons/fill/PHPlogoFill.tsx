import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PHPlogoFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    style: styleCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        d="M5.154 22.419h1.88a.168.168 0 0 0 .169-.144l.419-2.18h1.462a5.847 5.847 0 0 0 1.81-.24c.475-.157.909-.42 1.27-.767a3.81 3.81 0 0 0 .802-1.018 4.11 4.11 0 0 0 .431-1.199 2.912 2.912 0 0 0-.49-2.588 3.164 3.164 0 0 0-2.505-.934H6.807a.192.192 0 0 0-.18.155l-1.653 8.7a.228.228 0 0 0 0 .155.203.203 0 0 0 .18.06Zm3.415-7.381h1.198a1.737 1.737 0 0 1 1.294.348c.204.215.24.623.132 1.198-.06.514-.303.99-.683 1.342a2.6 2.6 0 0 1-1.594.395h-.959l.612-3.283ZM20.31 13.9a3.235 3.235 0 0 0-2.253-.611h-1.425l.395-2.11a.18.18 0 0 0 0-.155.191.191 0 0 0-.132 0h-1.881a.167.167 0 0 0-.168.144l-1.653 8.71a.155.155 0 0 0 0 .145.156.156 0 0 0 .131.072h1.846a.168.168 0 0 0 .168-.156l.922-4.877h1.33c.54 0 .731.12.79.192a.97.97 0 0 1 0 .743l-.73 3.882a.157.157 0 0 0 0 .144.169.169 0 0 0 .132.072h1.869a.192.192 0 0 0 .18-.156l.767-4.074a2.037 2.037 0 0 0-.288-1.965Zm5.416-.611h-3.75a.168.168 0 0 0-.18.155l-1.75 8.76a.192.192 0 0 0 0 .155.168.168 0 0 0 .132.06h1.953a.168.168 0 0 0 .18-.144l.443-2.18h1.522a6.325 6.325 0 0 0 1.87-.24 3.594 3.594 0 0 0 1.413-.767c.335-.29.618-.635.839-1.018.209-.375.358-.779.443-1.199a2.852 2.852 0 0 0-.503-2.588 3.368 3.368 0 0 0-2.612-.994Zm.743 3.319a2.193 2.193 0 0 1-.72 1.342 2.732 2.732 0 0 1-1.64.395h-.96l.648-3.307h1.198c.479-.059.963.065 1.354.348.192.215.192.623.12 1.222Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

PHPlogoFill.displayName = "PHPlogoFill";

export default PHPlogoFill;
