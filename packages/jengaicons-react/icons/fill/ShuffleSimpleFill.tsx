
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ShuffleSimpleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M21.96 28.69a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 1 0-2 0v3.587L5.667 3.984a1 1 0 0 0-1.414 1.414l22.293 22.293H22.96a1 1 0 0 0-1 1Zm1-24.907a1 1 0 1 0 0 2h3.586l-6.305 6.305a1 1 0 0 0 1.414 1.414l6.305-6.305v3.586a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1h-6ZM4.253 29.49a1 1 0 0 0 1.414 0l8.196-8.196a1 1 0 1 0-1.415-1.414l-8.195 8.196a1 1 0 0 0 0 1.414Z" fill="#1C1B1F"/></svg>
    });

    ShuffleSimpleFill.displayName = "ShuffleSimpleFill";

    export default ShuffleSimpleFill;
    