
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TerminalWindowFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.96 6.283a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-22Zm5.05 4.808a1 1 0 0 1 1.414 0l4.243 4.242a1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.414l3.536-3.536-3.536-3.535a1 1 0 0 1 0-1.414Zm5.949 9.192a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" fill="#1C1B1F"/></svg>
    });

    TerminalWindowFill.displayName = "TerminalWindowFill";

    export default TerminalWindowFill;
    