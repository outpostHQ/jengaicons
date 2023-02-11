
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberCircleEightFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M16.96 28.283c6.627 0 12-5.373 12-12s-5.373-12-12-12c-6.628 0-12 5.373-12 12s5.372 12 12 12Zm.171-16.992a1.75 1.75 0 1 0-.176 3.492h.01a1.755 1.755 0 0 0 1.348-.64 1.75 1.75 0 0 0 .397-1.11h1l-1-.001a1.742 1.742 0 0 0-.512-1.236 1.75 1.75 0 0 0-1.067-.505Zm2.465 4.409a3.75 3.75 0 1 0-5.273 0 4.25 4.25 0 1 0 5.273 0Zm-2.641 1.083h.01a2.25 2.25 0 0 1 1.586.659 2.242 2.242 0 0 1 .659 1.59l1 .001h-1a2.25 2.25 0 1 1-2.255-2.25Zm3.01-.756-.707.708.707-.707Z" fill="#1C1B1F"/></svg>
    });

    NumberCircleEightFill.displayName = "NumberCircleEightFill";

    export default NumberCircleEightFill;
    