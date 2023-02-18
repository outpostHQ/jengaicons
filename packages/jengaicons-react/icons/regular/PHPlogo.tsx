import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const PHPlogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          stroke={color || colorCtx || "#000000"}
          d="M10.656 12.405h-3.75a.168.168 0 0 0-.18.156l-1.75 8.759a.192.192 0 0 0 0 .155.168.168 0 0 0 .132.06h1.953a.168.168 0 0 0 .18-.143l.443-2.181h1.522a6.328 6.328 0 0 0 1.87-.24 3.594 3.594 0 0 0 1.413-.767c.335-.29.618-.634.839-1.018.209-.374.359-.778.443-1.198a2.852 2.852 0 0 0-.503-2.588 3.368 3.368 0 0 0-2.612-.995Zm.743 3.32a2.193 2.193 0 0 1-.719 1.341 2.733 2.733 0 0 1-1.642.396H8.08l.647-3.308h1.198c.48-.058.963.066 1.354.348.192.216.192.623.12 1.222ZM21.424 15.286a3.235 3.235 0 0 0-2.252-.612h-1.426l.395-2.108a.18.18 0 0 0 0-.156.191.191 0 0 0-.132 0h-1.88a.167.167 0 0 0-.169.143l-1.653 8.712a.155.155 0 0 0 0 .143.156.156 0 0 0 .132.072h1.845a.168.168 0 0 0 .168-.155l.922-4.877h1.33c.54 0 .731.12.791.191a.97.97 0 0 1 0 .743l-.73 3.883a.156.156 0 0 0 0 .143.168.168 0 0 0 .131.072h1.87a.192.192 0 0 0 .179-.155l.767-4.075a2.036 2.036 0 0 0-.288-1.964ZM22.439 21.478h1.88a.168.168 0 0 0 .169-.143l.419-2.181h1.462a5.847 5.847 0 0 0 1.809-.24c.476-.157.91-.42 1.27-.767.324-.29.596-.635.803-1.018a4.11 4.11 0 0 0 .431-1.198 2.911 2.911 0 0 0-.491-2.588 3.164 3.164 0 0 0-2.504-.935h-3.595a.192.192 0 0 0-.18.156l-1.653 8.699a.227.227 0 0 0 0 .155.203.203 0 0 0 .18.06Zm3.415-7.38h1.198a1.737 1.737 0 0 1 1.294.347c.203.216.24.623.132 1.198-.06.515-.303.99-.683 1.342a2.6 2.6 0 0 1-1.594.396h-.959l.611-3.284Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PHPlogo.displayName = "PHPlogo";

export default PHPlogo;
