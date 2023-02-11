
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FunctionRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M24.571 6h-2.844a5 5 0 0 0-4.929 4.159l-1.993 11.682A5 5 0 0 1 9.876 26H7.43" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path d="M24.571 20.338 18.91 26M24.571 26l-5.662-5.662" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FunctionRegular.displayName = "FunctionRegular";

    export default FunctionRegular;
    