
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CoatHangersvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m17.161 14.476 10.597 7.937a.5.5 0 0 1-.3.9H6.502a.5.5 0 0 1-.294-.904L20.044 12.37a.463.463 0 0 0 .174-.532c-.379-1.032-1.366-2.607-3.057-2.585-2.355.031-2.852 1.731-3.038 2.914" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    CoatHangersvgFill.displayName = "CoatHangersvgFill";

    export default CoatHangersvgFill;
    