
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const DownloadSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M6.398 20.799v3.902a.5.5 0 0 0 .5.5h18.203a.5.5 0 0 0 .5-.5V20.8" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path d="M16 18.799v-12M11.757 14.556 16 18.8l4.242-4.243" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    DownloadSimpleRegular.displayName = "DownloadSimpleRegular";

    export default DownloadSimpleRegular;
    