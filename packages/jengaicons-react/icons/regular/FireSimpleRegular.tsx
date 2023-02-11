
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FireSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M9.447 9.941c-1.802 2.715-3.276 5.828-3.276 8.73a9.83 9.83 0 1 0 19.658 0c0-6.085-4.212-10.766-7.63-14.171l-4.071 8.554-4.68-3.113Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FireSimpleRegular.displayName = "FireSimpleRegular";

    export default FireSimpleRegular;
    