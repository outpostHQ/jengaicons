
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const DoorFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M24.268 5.206a1 1 0 0 1 1 1V26.36h3.692a1 1 0 0 1 0 2h-24a1 1 0 1 1 0-2h3.692V6.206a1 1 0 0 1 1-1h14.616ZM20.19 17.668a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77Z" fill="#1C1B1F"/></svg>
    });

    DoorFill.displayName = "DoorFill";

    export default DoorFill;
    