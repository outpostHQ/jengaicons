
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PowerFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M17.96 7.473a1 1 0 1 0-2 0v7.972a1 1 0 0 0 2 0V7.473Zm-5.49 1.491a1 1 0 0 0-1.09-1.676 10.23 10.23 0 1 0 11.16 0 1 1 0 0 0-1.09 1.676 8.23 8.23 0 1 1-8.98 0Z" fill="#1C1B1F"/></svg>
    });

    PowerFill.displayName = "PowerFill";

    export default PowerFill;
    