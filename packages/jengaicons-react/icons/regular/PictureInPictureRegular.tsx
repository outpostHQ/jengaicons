
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PictureInPictureRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4 7.5h24v18H4z"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M17 16.5h11v9H17z"/></svg>
    });

    PictureInPictureRegular.displayName = "PictureInPictureRegular";

    export default PictureInPictureRegular;
    