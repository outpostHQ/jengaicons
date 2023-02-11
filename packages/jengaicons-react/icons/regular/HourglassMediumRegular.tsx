
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HourglassMediumRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M7.75 4.5h16.5v.812a10 10 0 0 1-4 8L16 16.5l-4.25-3.188a10 10 0 0 1-4-8V4.5Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M10.146 11.5h11.656" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.75 28.5h16.5v-.812a10 10 0 0 0-4-8L16 16.5l-4.25 3.188a10 10 0 0 0-4 8v.812Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    HourglassMediumRegular.displayName = "HourglassMediumRegular";

    export default HourglassMediumRegular;
    