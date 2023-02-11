
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FunnelSimpleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M6.73 12.023a1 1 0 0 1 1-1H26.19a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm3.55 4.26a1 1 0 0 1 1-1h11.36a1 1 0 1 1 0 2H11.28a1 1 0 0 1-1-1Zm4.55 3.26a1 1 0 1 0 0 2h4.26a1 1 0 1 0 0-2h-4.26Z" fill="#1C1B1F"/></svg>
    });

    FunnelSimpleFill.displayName = "FunnelSimpleFill";

    export default FunnelSimpleFill;
    