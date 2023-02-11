
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MouseFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M8.773 12.283a8 8 0 0 1 8-8h.373a8 8 0 0 1 8 8v1H8.773v-1Zm0 3h16.373v5a8 8 0 0 1-8 8h-.373a8 8 0 0 1-8-8v-5Zm9.187-7.672a1 1 0 0 0-2 0v3.344a1 1 0 1 0 2 0V7.61Z" fill="#1C1B1F"/></svg>
    });

    MouseFill.displayName = "MouseFill";

    export default MouseFill;
    