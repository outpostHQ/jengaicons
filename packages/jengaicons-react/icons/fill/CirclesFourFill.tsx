
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CirclesFourFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M9.87 14.101a4.909 4.909 0 1 0 0-9.818 4.909 4.909 0 0 0 0 9.818ZM24.05 14.101a4.91 4.91 0 1 0 0-9.818 4.91 4.91 0 0 0 0 9.818ZM9.87 28.283a4.91 4.91 0 1 0-.001-9.818 4.91 4.91 0 0 0 0 9.818ZM24.05 28.283a4.91 4.91 0 1 0 0-9.818 4.91 4.91 0 0 0 0 9.818Z" fill="#1C1B1F"/></svg>
    });

    CirclesFourFill.displayName = "CirclesFourFill";

    export default CirclesFourFill;
    