
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CarRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 14.714h24M9.143 18.143h1.714M21.143 18.143h1.714" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.714 14.714h20.572v6.857H5.714v-6.857ZM8.907 7h14.186l3.547 7.714H5.36L8.907 7Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M5.714 21.571V25h4.472v-3.429M21.814 21.571V25h4.472v-3.429" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CarRegular.displayName = "CarRegular";

    export default CarRegular;
    