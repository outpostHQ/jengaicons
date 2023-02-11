
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RssSimpleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M8.423 6.283A18.537 18.537 0 0 1 26.96 24.82M8.423 15.063a9.755 9.755 0 0 1 9.756 9.757" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.423 26.283a1.463 1.463 0 1 0 0-2.927 1.463 1.463 0 0 0 0 2.927Z" fill="#1C1B1F"/></svg>
    });

    RssSimpleFill.displayName = "RssSimpleFill";

    export default RssSimpleFill;
    