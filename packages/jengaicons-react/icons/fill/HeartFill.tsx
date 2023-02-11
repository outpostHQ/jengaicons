
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HeartFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.96 26.843s-12-6.72-12-14.88a6.241 6.241 0 0 1 12-2.404 6.242 6.242 0 0 1 12 2.404c0 8.16-12 14.88-12 14.88Z" fill="#1C1B1F"/></svg>
    });

    HeartFill.displayName = "HeartFill";

    export default HeartFill;
    