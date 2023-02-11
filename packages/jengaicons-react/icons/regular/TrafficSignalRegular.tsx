
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TrafficSignalRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 24a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM24 9h3M24 19h3M5 9h3M5 19h3" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M8 4h16v24H8z"/></svg>
    });

    TrafficSignalRegular.displayName = "TrafficSignalRegular";

    export default TrafficSignalRegular;
    