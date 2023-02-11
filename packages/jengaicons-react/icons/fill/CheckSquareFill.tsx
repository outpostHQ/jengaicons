
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CheckSquareFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.96 4.283a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-22Zm17.69 9.45a1 1 0 0 0-1.38-1.446l-7.31 6.977-3.31-3.159a1 1 0 0 0-1.38 1.447l4 3.818a1 1 0 0 0 1.38 0l8-7.636Z" fill="#1C1B1F"/></svg>
    });

    CheckSquareFill.displayName = "CheckSquareFill";

    export default CheckSquareFill;
    