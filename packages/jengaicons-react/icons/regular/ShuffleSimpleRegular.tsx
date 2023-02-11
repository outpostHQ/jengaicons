
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ShuffleSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m4 4.5 24 24M4 28.5l8.196-8.196M28 4.5l-8.012 8.012M22 4.5h6v6M28 22.5v6h-6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ShuffleSimpleRegular.displayName = "ShuffleSimpleRegular";

    export default ShuffleSimpleRegular;
    