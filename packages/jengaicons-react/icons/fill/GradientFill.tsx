
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GradientFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M4.46 8.033a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2h-24Zm0 5a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2h-10Zm14 0a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2h-10Zm-15 6a1 1 0 0 1 1-1h5.5a1 1 0 0 1 0 2h-5.5a1 1 0 0 1-1-1Zm19.5-1a1 1 0 1 0 0 2h5.5a1 1 0 0 0 0-2h-5.5Zm-10.5 1a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1Zm-8 4a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2h-3Zm6 1a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2h-3Zm6 1a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1Z" fill="#1C1B1F"/></svg>
    });

    GradientFill.displayName = "GradientFill";

    export default GradientFill;
    