
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AirplaneLandingRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M5.012 26.726h19.626M6.102 8.185a5 5 0 0 0 2.285 6.692l16.875 8.285 1.315-2.678a3 3 0 0 0-1.371-4.015l-5.64-2.768-1.717-6.283-2.962-1.454-.612 5.139-3.12-1.531-.493-2.987L7.62 5.092 6.102 8.185Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    AirplaneLandingRegular.displayName = "AirplaneLandingRegular";

    export default AirplaneLandingRegular;
    