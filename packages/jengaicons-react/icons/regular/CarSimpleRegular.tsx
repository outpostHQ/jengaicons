
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CarSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M9.737 14.714h12.526" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M26.286 14.714 22.857 7H9.143l-3.429 7.714" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M26.286 14.71V25H21.81v-3.428H10.138V25H5.714V14.71" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CarSimpleRegular.displayName = "CarSimpleRegular";

    export default CarSimpleRegular;
    