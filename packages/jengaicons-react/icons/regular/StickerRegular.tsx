
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const StickerRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28 4H4v24h13.21L28 17.307V4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M17.09 27v-4.91a5 5 0 0 1 5-5h4.86" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    StickerRegular.displayName = "StickerRegular";

    export default StickerRegular;
    