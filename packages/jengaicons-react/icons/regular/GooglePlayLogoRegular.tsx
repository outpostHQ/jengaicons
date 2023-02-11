
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GooglePlayLogoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M26.616 16 5.384 4v24l21.232-12Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M5.933 5.03 20.32 19.419M5.933 26.935 20.32 12.548" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GooglePlayLogoRegular.displayName = "GooglePlayLogoRegular";

    export default GooglePlayLogoRegular;
    