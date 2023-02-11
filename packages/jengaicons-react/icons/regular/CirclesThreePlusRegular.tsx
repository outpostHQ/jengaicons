
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CirclesThreePlusRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M8.91 13.818A4.91 4.91 0 1 0 8.908 4a4.91 4.91 0 0 0 0 9.818ZM23.091 13.818a4.91 4.91 0 1 0 0-9.818 4.91 4.91 0 0 0 0 9.818ZM8.91 28a4.909 4.909 0 1 0 0-9.818 4.909 4.909 0 0 0 0 9.818ZM23.09 19.273v7.636M26.91 23.09h-7.637" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CirclesThreePlusRegular.displayName = "CirclesThreePlusRegular";

    export default CirclesThreePlusRegular;
    