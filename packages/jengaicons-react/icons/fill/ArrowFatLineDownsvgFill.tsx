
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowFatLineDownsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M6.167 16.283a.5.5 0 0 0-.353.854l10.792 10.792a.5.5 0 0 0 .707 0l10.793-10.792a.5.5 0 0 0-.353-.854H23.46a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v7a.5.5 0 0 1-.5.5H6.167Z" fill="#1C1B1F"/><path d="M22.96 4.283h-12" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowFatLineDownsvgFill.displayName = "ArrowFatLineDownsvgFill";

    export default ArrowFatLineDownsvgFill;
    