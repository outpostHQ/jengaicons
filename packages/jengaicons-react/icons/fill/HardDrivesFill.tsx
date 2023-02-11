
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HardDrivesFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M4.96 6.374a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1V13.1a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1V6.374Zm19.09 5a1.636 1.636 0 1 0 .001-3.273 1.636 1.636 0 0 0 0 3.273Zm-19.09 8.09a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v6.728a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-6.727Zm19.09 5a1.636 1.636 0 1 0 .001-3.272 1.636 1.636 0 0 0 0 3.273Z" fill="#1C1B1F"/></svg>
    });

    HardDrivesFill.displayName = "HardDrivesFill";

    export default HardDrivesFill;
    