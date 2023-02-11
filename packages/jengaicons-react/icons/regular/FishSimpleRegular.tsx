
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FishSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M20.375 10.721a1.404 1.404 0 1 0 0-2.807 1.404 1.404 0 0 0 0 2.807Z" fill="#1C1B1F"/><path d="M4 21.95C31.112 27.88 28.305 9.26 27.533 5.692a.958.958 0 0 0-.725-.725C23.24 4.195 4.62 1.387 10.55 28.5" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M25.673 18.207a11.229 11.229 0 0 1-11.38-11.392" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FishSimpleRegular.displayName = "FishSimpleRegular";

    export default FishSimpleRegular;
    