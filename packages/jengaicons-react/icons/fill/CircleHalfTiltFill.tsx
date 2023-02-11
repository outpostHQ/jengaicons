
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CircleHalfTiltFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M8.474 24.768c4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0-4.686 4.686-4.686 12.284 0 16.97Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.475 24.768c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97l-16.97 16.97Z" fill="#1C1B1F"/></svg>
    });

    CircleHalfTiltFill.displayName = "CircleHalfTiltFill";

    export default CircleHalfTiltFill;
    