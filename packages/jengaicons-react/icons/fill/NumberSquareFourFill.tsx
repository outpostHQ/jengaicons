
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberSquareFourFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M4.96 5.283a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-22Zm14.2 8.282a1 1 0 0 1 1 1v7.718a1 1 0 1 1-2 0v-2.928h-4.833a1 1 0 0 1-.942-1.337l2.898-8.073a1 1 0 1 1 1.882.676l-2.417 6.734h3.413v-2.79a1 1 0 0 1 1-1Z" fill="#1C1B1F"/></svg>
    });

    NumberSquareFourFill.displayName = "NumberSquareFourFill";

    export default NumberSquareFourFill;
    