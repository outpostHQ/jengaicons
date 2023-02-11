
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SuitcaseSimpleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M11.96 4.783a1 1 0 0 0-1 1v4h-5a1 1 0 0 0-1 1v8.88l24 .24v-9.12a1 1 0 0 0-1-1h-5v-4a1 1 0 0 0-1-1h-10Zm9 5v-3h-8v3h8Zm-16 11.88 24 .24v4.88a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-5.12Z" fill="#1C1B1F"/></svg>
    });

    SuitcaseSimpleFill.displayName = "SuitcaseSimpleFill";

    export default SuitcaseSimpleFill;
    