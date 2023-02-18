import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Nestjslogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeLinejoin="round"
          d="M20.17 6.151c.142-.162.26-.35.336-.568 1.474.758 2.144 2.256 2.014 3.683-.144 1.58-1.272 3.073-3.474 3.316a.5.5 0 0 0-.078.978c2.754.763 5.2-.83 5.948-3.13 3.349 4.41 2.938 8.682 1.584 11.473a9.193 9.193 0 0 0-.212-1.297.5.5 0 0 0-.98.038c-.268 1.698-.904 3.25-2.09 4.603a7.234 7.234 0 0 0 .278-.988l.011-.05c.053-.23.102-.443.175-.681a.5.5 0 0 0-.905-.406c-1.243 2.057-2.893 3.514-5.01 4.265a12.418 12.418 0 0 0 1.707-1.793.5.5 0 0 0-.56-.782c-.399.143-.788.28-1.152.399 1.284-1.543 1.777-3.617 1.337-5.532a.5.5 0 0 0-.984.05c-.091.73-.438 1.6-.996 2.38-.556.779-1.298 1.435-2.151 1.777-.9.361-2.357.68-3.89.156a.499.499 0 0 0-.104-.687c-1.008-.769-1.053-1.924-.92-2.407 0 0 .01-.025.04-.074.035-.056.085-.126.148-.198.13-.148.288-.276.452-.338l-.177-.467.177.467c.129-.048.261-.074.377-.077a.518.518 0 0 1 .207.028.633.633 0 0 1-.072.229 1.457 1.457 0 0 0-.019 1.036c.109.294.306.527.527.7a2.36 2.36 0 0 0 1.526.479.5.5 0 0 0 .378-.207c.049-.067.096-.135.141-.203a.5.5 0 0 0 .56.006c.44-.291.772-.798 1.04-1.32a.98.98 0 0 1 .194.111.986.986 0 0 1 .223.223c.055.079.06.123.061.128a.5.5 0 0 0 1-.03c-.02-1.573-.882-3.564-2.466-5.012-1.605-1.468-3.963-2.389-6.96-1.783a.501.501 0 0 0-.199.089.5.5 0 0 0-.732-.238.5.5 0 0 0-.26-.142 1.02 1.02 0 0 1-.426-.256 1.307 1.307 0 0 1-.382-.652.5.5 0 0 0-.27-.335c-.4-.193-.552-.397-.608-.544-.055-.146-.046-.317.045-.511.093-.199.26-.394.466-.542.208-.15.416-.224.572-.23 1.42-.062 2.28-.93 3.177-1.834l.315-.316c.905-.895 2.58-1.336 4.415-1.354 1.82-.017 3.644.384 4.748 1.01a.5.5 0 0 0 .725-.58c-.153-.512-.115-.786-.05-.945.069-.167.2-.3.432-.47l.133-.095c.198-.14.46-.325.658-.55Zm-1.482-.94c.127.082.21.177.253.275-.047.04-.104.087-.175.142l-.007.006a1.732 1.732 0 0 0-.071-.423Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Nestjslogo.displayName = "Nestjslogo";

export default Nestjslogo;
