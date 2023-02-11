
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RssRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M6.952 17.429a7.619 7.619 0 0 1 7.62 7.619M6.952 11.714a13.333 13.333 0 0 1 13.334 13.334" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.952 6A19.048 19.048 0 0 1 26 25.048" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.429 26a1.429 1.429 0 1 0 0-2.857 1.429 1.429 0 0 0 0 2.857Z" fill="#1C1B1F"/></svg>
    });

    RssRegular.displayName = "RssRegular";

    export default RssRegular;
    