
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TelevisionRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M21 27.121v-18M25 12.446h-1M25 17.446h-1M25 22.446h-1" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 9.121h24v18H4v-18Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M20.243 4.879 16 9.12 11.757 4.88" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    TelevisionRegular.displayName = "TelevisionRegular";

    export default TelevisionRegular;
    