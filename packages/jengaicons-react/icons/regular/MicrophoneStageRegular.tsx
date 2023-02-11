
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MicrophoneStageRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M25.82 16.5 16 6.68M13.54 18.96l-1.301 1.301M21.063 18.374a6.937 6.937 0 1 0 0-13.874 6.937 6.937 0 0 0 0 13.874Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.754 18.309 7.657 26.594 5.27 24.209l8.921-11.462" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    MicrophoneStageRegular.displayName = "MicrophoneStageRegular";

    export default MicrophoneStageRegular;
    