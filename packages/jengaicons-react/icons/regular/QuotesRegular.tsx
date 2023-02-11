
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const QuotesRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4 7.847h9.5v9.5H4z"/><path d="M13.486 15.54v1.558c0 1.936 0 6.83-5.024 7.055" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M18.5 7.847H28v9.5h-9.5z"/><path d="M27.986 15.54v1.558c0 1.936 0 6.83-5.024 7.055" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    QuotesRegular.displayName = "QuotesRegular";

    export default QuotesRegular;
    