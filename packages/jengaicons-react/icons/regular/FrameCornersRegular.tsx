
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FrameCornersRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 6h24v20H4V6Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M24 15v-5h-6M8 17v5h6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FrameCornersRegular.displayName = "FrameCornersRegular";

    export default FrameCornersRegular;
    