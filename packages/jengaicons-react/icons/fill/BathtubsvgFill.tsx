
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BathtubsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.96 23.569v2.571M22.96 23.569v2.571" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clip-rule="evenodd" d="M5.46 14.14a.5.5 0 0 0-.5.5v3.929a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V14.64a.5.5 0 0 0-.5-.5h-23Zm17.84.498h-4.108v2.451H23.3v-2.45Z" fill="#1C1B1F"/><path d="M9.246 14.14V8.426a2 2 0 0 1 2-2h.285a2 2 0 0 1 2 2v.143" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    BathtubsvgFill.displayName = "BathtubsvgFill";

    export default BathtubsvgFill;
    