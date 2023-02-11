
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GifRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.735 9.643v13.714M26.53 16.5h-4.408M11.837 13.704v-1.061a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7.714a3 3 0 0 0 3 3h1.837a3 3 0 0 0 3-3v-2.851H8.96M28 9.643h-5.878v13.652" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GifRegular.displayName = "GifRegular";

    export default GifRegular;
    