
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FramerLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M9.914 4.423h14.823a.5.5 0 0 1 .5.5v7.051a.5.5 0 0 1-.5.5H16.96l7.394 7.193a.5.5 0 0 1-.348.858h-6.922a.5.5 0 0 0-.5.5v6.194a.5.5 0 0 1-.854.354l-6.9-6.901a.5.5 0 0 1-.147-.354v-7.344a.5.5 0 0 1 .5-.5h7.777L9.565 5.281a.5.5 0 0 1 .349-.858Z" fill="#1C1B1F"/></svg>
    });

    FramerLogosvgFill.displayName = "FramerLogosvgFill";

    export default FramerLogosvgFill;
    