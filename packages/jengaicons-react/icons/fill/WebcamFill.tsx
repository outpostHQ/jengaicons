
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const WebcamFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M17.959 23.728a9.001 9.001 0 0 0-.999-17.945 9 9 0 0 0-.999 17.945l-.001.055v3h-10a1 1 0 1 0 0 2h22a1 1 0 0 0 0-2h-10v-3c0-.018 0-.037-.002-.055Zm-.999-4.945a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#1C1B1F"/></svg>
    });

    WebcamFill.displayName = "WebcamFill";

    export default WebcamFill;
    