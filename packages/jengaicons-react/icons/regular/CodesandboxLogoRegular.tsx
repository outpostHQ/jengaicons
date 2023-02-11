
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CodesandboxLogoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M21.503 7.142 16 10.058l-5.504-2.916M21.391 24.986v-6.114l5.333-2.995M10.608 24.965v-6.1L5.4 15.877" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.276 10 16 4l10.724 6v12L16 28 5.276 22V10Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M26.724 10.002 16.168 16 5.4 10" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.12 16v11.7" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    CodesandboxLogoRegular.displayName = "CodesandboxLogoRegular";

    export default CodesandboxLogoRegular;
    