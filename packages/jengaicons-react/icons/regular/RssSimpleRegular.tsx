
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RssSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M7.463 6A18.537 18.537 0 0 1 26 24.537M7.463 14.78a9.756 9.756 0 0 1 9.756 9.757" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.463 26a1.463 1.463 0 1 0 0-2.927 1.463 1.463 0 0 0 0 2.927Z" fill="#1C1B1F"/></svg>
    });

    RssSimpleRegular.displayName = "RssSimpleRegular";

    export default RssSimpleRegular;
    