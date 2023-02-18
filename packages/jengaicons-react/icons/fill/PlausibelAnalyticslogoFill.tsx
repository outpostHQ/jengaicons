import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PlausibelAnalyticslogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          fillRule="evenodd"
          d="M10.335 6.479c1.296-1.267 2.861-2.055 4.72-2.378.872-.155 2.605-.125 3.37.048 1.451.34 2.795 1.016 4.014 2.025 1.076.89 2.127 2.414 2.426 3.513.096.37.102.46.036.79-.042.196-.137.489-.21.638-.25.544-.877 1.034-1.463 1.147-.126.024-1.739.048-3.579.048l-3.346.006-.358.144c-.49.197-1.034.74-1.231 1.23l-.144.359.018 3.674c.018 3.49.012 3.71-.101 4.38-.137.789-.335 1.422-.61 1.972-1.087 2.157-3.083 3.579-5.43 3.865-.275.03-.58.06-.676.06h-.167l.018-8.084.018-8.078.137-.645c.4-1.894 1.225-3.412 2.558-4.714Zm15.292 4.719c.066-.329.06-.418-.036-.789.258.584.763 2.063.723 3.305a8.992 8.992 0 0 1-11.048 8.755c.062-.513.063-1.192.049-4.024l-.018-3.674.143-.359c.197-.49.741-1.034 1.231-1.23l.358-.144 3.346-.006c1.84 0 3.454-.024 3.58-.048.585-.113 1.212-.603 1.463-1.147.072-.15.167-.442.21-.64Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PlausibelAnalyticslogoFill.displayName = "PlausibelAnalyticslogoFill";

export default PlausibelAnalyticslogoFill;
