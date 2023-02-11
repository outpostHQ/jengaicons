
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SpeakerSimpleSlashRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m6.001 5.5 20 22M23.998 13.5v6M27.998 11.5v10M11.864 12.201h-3.39A4.472 4.472 0 0 0 4 16.673v0a4.472 4.472 0 0 0 4.472 4.472h1.76l7.906 6.001v-7.613M14.186 9.027l3.953-3.173v7.673" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    SpeakerSimpleSlashRegular.displayName = "SpeakerSimpleSlashRegular";

    export default SpeakerSimpleSlashRegular;
    