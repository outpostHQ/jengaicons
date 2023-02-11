
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HardDriveFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.96 9.821a1 1 0 0 0-1 1v10.923a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10.821a1 1 0 0 0-1-1h-22Zm19.308 6.462a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0Z" fill="#1C1B1F"/></svg>
    });

    HardDriveFill.displayName = "HardDriveFill";

    export default HardDriveFill;
    