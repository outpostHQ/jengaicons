
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const DeviceMobileSpeakerFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M11.575 4.283a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10.77a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2h-10.77Zm1.385 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z" fill="#1C1B1F"/></svg>
    });

    DeviceMobileSpeakerFill.displayName = "DeviceMobileSpeakerFill";

    export default DeviceMobileSpeakerFill;
    