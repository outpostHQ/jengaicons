
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RewindFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.644 16.358a.5.5 0 0 0 0 .85l10.177 6.321a.5.5 0 0 0 .764-.425V10.462a.5.5 0 0 0-.764-.425L5.644 16.358Zm12.375 0a.5.5 0 0 0 0 .85l10.177 6.321a.5.5 0 0 0 .764-.425V10.462a.5.5 0 0 0-.764-.425L18.02 16.358Z" fill="#1C1B1F"/></svg>
    });

    RewindFill.displayName = "RewindFill";

    export default RewindFill;
    