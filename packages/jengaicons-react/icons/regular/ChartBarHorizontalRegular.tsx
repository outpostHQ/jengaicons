
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ChartBarHorizontalRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M5.92 4v24" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M26.08 19.36v-6.72H5.92v6.72zM20.32 12.64V5.92H5.92v6.72zM14.56 26.08v-6.72H5.92v6.72z"/></svg>
    });

    ChartBarHorizontalRegular.displayName = "ChartBarHorizontalRegular";

    export default ChartBarHorizontalRegular;
    