
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ThumbsUpRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4 14.617h6.492v12.056H4z"/><path d="m15.394 5.326-4.902 9.64v11.708h15.699l1.54-12.781a2 2 0 0 0-1.986-2.24h-6.499V8.327a3 3 0 0 0-3-3h-.852Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ThumbsUpRegular.displayName = "ThumbsUpRegular";

    export default ThumbsUpRegular;
    