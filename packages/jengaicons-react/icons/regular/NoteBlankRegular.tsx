
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NoteBlankRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 4h24v16.991L19.626 28H4V4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M19.707 21.06v6.812l8.183-6.813h-8.183Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    NoteBlankRegular.displayName = "NoteBlankRegular";

    export default NoteBlankRegular;
    