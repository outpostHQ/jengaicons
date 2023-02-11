
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BuildingsRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 25.857h24M10 10.429h3.428M10 15.572h3.428M10 20.714h3.428M21.142 21.572h1.715M21.142 17.286h1.715" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M5.714 6.18h12v19.677h-12zM17.714 13h8.572v12.857h-8.572z"/></svg>
    });

    BuildingsRegular.displayName = "BuildingsRegular";

    export default BuildingsRegular;
    