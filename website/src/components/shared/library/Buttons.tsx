import { useEffect, useMemo } from "react"
import { Button, CubeButtonProps, Flex } from "@cube-dev/ui-kit"
import { ArrowSquareOut } from "@jengaicons/react"
// import { animate, stagger } from 'motion';

import { CPRow } from "./Utils"

const sharedButtonStyles = {
  fontWeight: 500,
  radius: "2r",
  padding: "0.5rem 1rem",
  styles: { fontSize: "0.9375rem" },
}

export function CPButton({
  variant = "primary",
  children,
  style = {},
  styles = {},
  openInNew = false,
  ...otherProps
}: CubeButtonProps & { variant?: keyof typeof CPButtonVariantProps } & {
  openInNew?: boolean
}) {
  const CPButtonVariantProps = useMemo(
    () => ({
      primary: {
        type: "primary",
        color: "var(--cp-gray-100)",
        fill: {
          "": "var(--cp-surface-primary)",
          hovered: "var(--cp-surface-primary-hovered)",
          disabled: "var(--cp-surface-primary-pressed)",
        },
        opacity: {
          "": "1",
          disabled: "0.5",
        },
        cursor: {
          "": "pointer",
          disabled: "not-allowed",
        },
        ...style,
        ...styles,
      },
      danger: {
        type: "danger",
        theme: "danger",
        fill: {
          "": "var(--cp-surface-critical)",
          hovered: "var(--cp-surface-critical-hovered)",
          disabled: "var(--cp-surface-primary-subdued)",
        },

        color: "var(--cp-gray-100)",
        ...style,
        ...styles,
      },
      clear: {
        color: "var(--cp-text)",
        type: "clear",
        fill: {
          "": "transparent",
          hovered: "var(--cp-surface-hovered)",
        },
        styles: {
          border: "1px solid var(--cp-border)",
          borderColor: {
            "": "transparent",
            hovered: "var(--cp-border)",
            pressed: "var(--cp-border)",
          },
          ...styles,
        },
        style: {
          ...style,
        },
      },
      invisible: {
        color: "var(--cp-text)",
        type: "clear",
        padding: "0",
        fill: {
          "": "transparent",
        },
        outline: "none",
        border: "none",
        ...style,
        ...styles,
      },
      link: {
        padding: "0 0.5rem",
        type: "link",
        outline: "0",
        ...style,
        ...styles,
      },
      outline: {
        type: "outline",
        color: "var(--cp-text)",
        padding: "0.5rem 1rem",
        border: "1px solid var(--cp-text)",
        style: { ...style },
        styles: {
          ...sharedButtonStyles,
          opacity: {
            "": "1",
            disabled: "0.5",
          },
          borderColor: {
            "": "var(--cp-border)",
            "is-hovered": "var(--cp-border)",
            "is-pressed": "var(--cp-border)",
          },
          fill: {
            "": "var(--cp-surface)",
            hovered: "var(--cp-surface-hovered)",
          },
          cursor: {
            "": "pointer",
            disabled: "not-allowed",
          },
          ...styles,
        },
      },
    }),
    [style, styles],
  )

  return (
    <Button
      {...sharedButtonStyles}
      {...CPButtonVariantProps[variant]}
      {...otherProps}
    >
      {children}
    </Button>
  )
}

export function CPButtonOpenInNew(props: CubeButtonProps) {
  return (
    <Button type='link' to={`!${props.to}`} outline='0'>
      <Flex
        style={{ whiteSpace: "normal", gap: "0.5rem", alignItems: "center" }}
      >
        {props.children}
        <ArrowSquareOut color='var(--cp-icon-primary)' />
      </Flex>
    </Button>
  )
}

// export function CPSpinner() {
//   useEffect(() => {
//     const numSegments = document.querySelectorAll(".segment").length;

//     /**
//      * Stagger offset (in seconds)
//      * Decrease this to speed the animation up or increase
//      * to slow it down.
//      */
//     const offset = 0.09;

//     setTimeout(() => {
//       animate(
//         ".segment",
//         { opacity: [1, 0, 1] },
//         {
//           offset: [0, 0.1, 1],
//           duration: 0.8,
//           delay: stagger(offset),
//           repeat: Infinity,
//         }
//       );
//     }, 1000);
//   }, []);

//   return (
//     <CPRow>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="40"
//         height="38"
//         viewBox="0 -50 40 300"
//       >
//         <g className="segment">
//           <path
//             id="loading-path"
//             d="M 94 25 C 94 21.686 96.686 19 100 19 L 100 19 C 103.314 19 106 21.686 106 25 L 106 50 C 106 53.314 103.314 56 100 56 L 100 56 C 96.686 56 94 53.314 94 50 Z"
//           ></path>
//         </g>
//         <g className="segment">
//           <use
//             href="#loading-path"
//             style={{
//               transform: "rotate(45deg)",
//               transformOrigin: "100px 100px",
//             }}
//           />
//         </g>
//         <g className="segment">
//           <use
//             href="#loading-path"
//             style={{
//               transform: "rotate(90deg)",
//               transformOrigin: "100px 100px",
//             }}
//           />
//         </g>
//         <g className="segment">
//           <use
//             href="#loading-path"
//             style={{
//               transform: "rotate(135deg)",
//               transformOrigin: "100px 100px",
//             }}
//           />
//         </g>
//         <g className="segment">
//           <use
//             href="#loading-path"
//             style={{
//               transform: "rotate(180deg)",
//               transformOrigin: "100px 100px",
//             }}
//           />
//         </g>
//         <g className="segment">
//           <use
//             href="#loading-path"
//             style={{
//               transform: "rotate(225deg)",
//               transformOrigin: "100px 100px",
//             }}
//           />
//         </g>
//         <g className="segment">
//           <use
//             href="#loading-path"
//             style={{
//               transform: "rotate(270deg)",
//               transformOrigin: "100px 100px",
//             }}
//           />
//         </g>
//         <g className="segment">
//           <use
//             href="#loading-path"
//             style={{
//               transform: "rotate(315deg)",
//               transformOrigin: "100px 100px",
//             }}
//           />
//         </g>
//       </svg>
//     </CPRow>
//   );
// }
