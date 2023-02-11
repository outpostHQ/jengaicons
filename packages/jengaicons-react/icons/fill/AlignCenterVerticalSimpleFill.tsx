
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AlignCenterVerticalSimpleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M21.415 28.283a1 1 0 0 0 1-1v-10h5.454a1 1 0 0 0 0-2h-5.454v-10a1 1 0 0 0-1-1h-8.91a1 1 0 0 0-1 1v10H6.051a1 1 0 1 0 0 2h5.454v10a1 1 0 0 0 1 1h8.91Z" fill="#1C1B1F"/></svg>
    });

    AlignCenterVerticalSimpleFill.displayName = "AlignCenterVerticalSimpleFill";

    export default AlignCenterVerticalSimpleFill;
    