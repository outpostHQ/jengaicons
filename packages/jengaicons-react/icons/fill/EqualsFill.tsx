
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const EqualsFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M6.96 11.647a1 1 0 1 0 0 2h20a1 1 0 0 0 0-2h-20Zm0 7.272a1 1 0 1 0 0 2h20a1 1 0 0 0 0-2h-20Z" fill="#1C1B1F"/></svg>
    });

    EqualsFill.displayName = "EqualsFill";

    export default EqualsFill;
    