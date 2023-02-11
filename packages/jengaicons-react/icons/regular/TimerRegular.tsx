
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TimerRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 28.5c5.608 0 10.154-4.546 10.154-10.154S21.608 8.192 16 8.192 5.846 12.738 5.846 18.346 10.392 28.5 16 28.5Z" stroke="#1C1B1F" strokeWidth="2" strokeMiterlimit="10"/><path d="m16 18.346 4.57-4.569M13.23 4.5h5.54" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    TimerRegular.displayName = "TimerRegular";

    export default TimerRegular;
    