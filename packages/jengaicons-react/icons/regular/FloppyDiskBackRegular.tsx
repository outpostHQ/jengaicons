
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FloppyDiskBackRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 22.001a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M28 28H4V11.008L11.283 4H28v24Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M12 10.001h8V4" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FloppyDiskBackRegular.displayName = "FloppyDiskBackRegular";

    export default FloppyDiskBackRegular;
    