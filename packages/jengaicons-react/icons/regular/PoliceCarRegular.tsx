
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PoliceCarRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 16.571h24" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.714 16.519h20.572v6.624H5.714v-6.624ZM9.93 8.571h12.14l4.59 7.948H5.34l4.59-7.948Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M5.714 23.143v4.285h4.714v-4.285M21.571 23.143v4.285h4.715v-4.285M9 19.83h2M21 19.83h2M13 4.571h6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    PoliceCarRegular.displayName = "PoliceCarRegular";

    export default PoliceCarRegular;
    