
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TextTFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M7.73 6.892a1 1 0 0 0-1 1v3.775a1 1 0 1 0 2 0V8.892h7.226v14.781h-2.73a1 1 0 1 0 0 2h7.459a1 1 0 1 0 0-2h-2.729V8.893h7.235v2.774a1 1 0 1 0 2 0V7.892a1 1 0 0 0-1-1H7.729Z" fill="#1C1B1F"/></svg>
    });

    TextTFill.displayName = "TextTFill";

    export default TextTFill;
    