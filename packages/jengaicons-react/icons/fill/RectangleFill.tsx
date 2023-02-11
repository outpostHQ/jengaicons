
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RectangleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4.96 6.283h24v20h-24z"/></svg>
    });

    RectangleFill.displayName = "RectangleFill";

    export default RectangleFill;
    