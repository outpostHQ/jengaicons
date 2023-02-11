
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AirplaneInFlightRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M8.255 24.06h15.49M8 18.897h20v-3.033a3 3 0 0 0-3-3h-6.36L14.292 7.94h-3.327l1.73 4.924H9.19l-1.774-2.485H4v4.518a4 4 0 0 0 4 4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    AirplaneInFlightRegular.displayName = "AirplaneInFlightRegular";

    export default AirplaneInFlightRegular;
    