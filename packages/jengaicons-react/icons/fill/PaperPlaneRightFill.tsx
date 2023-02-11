
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PaperPlaneRightFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="m7.236 27.675 19.753-10.984a.5.5 0 0 0 0-.874L7.233 4.887a.5.5 0 0 0-.72.586l3.06 9.81h7.892a1 1 0 1 1 0 2H9.574l-3.059 9.806a.5.5 0 0 0 .72.586Z" fill="#1C1B1F"/></svg>
    });

    PaperPlaneRightFill.displayName = "PaperPlaneRightFill";

    export default PaperPlaneRightFill;
    