
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberZeroFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.96 26.283c3.823 0 6.923-4.477 6.923-10s-3.1-10-6.923-10c-3.824 0-6.923 4.477-6.923 10s3.1 10 6.923 10Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    NumberZeroFill.displayName = "NumberZeroFill";

    export default NumberZeroFill;
    