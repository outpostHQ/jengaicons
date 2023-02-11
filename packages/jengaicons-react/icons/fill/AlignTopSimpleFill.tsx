
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AlignTopSimpleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M7.32 5.283a1 1 0 0 1 0-2H24.6a1 1 0 1 1 0 2H7.32Zm4.84 23a1 1 0 0 1-1-1V9.123a1 1 0 0 1 1-1h7.6a1 1 0 0 1 1 1v18.16a1 1 0 0 1-1 1h-7.6Z" fill="#1C1B1F"/></svg>
    });

    AlignTopSimpleFill.displayName = "AlignTopSimpleFill";

    export default AlignTopSimpleFill;
    