
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BatteryWarningVerticalFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M13.47 3.283a1 1 0 0 0 0 2h6.981a1 1 0 0 0 0-2H13.47Zm-3.365 25a1 1 0 0 1-1-1V9.21a1 1 0 0 1 1-1h13.71a1 1 0 0 1 1 1v18.073a1 1 0 0 1-1 1h-13.71Zm8.855-6.036a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-.5-9.5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0v-5Z" fill="#1C1B1F"/></svg>
    });

    BatteryWarningVerticalFill.displayName = "BatteryWarningVerticalFill";

    export default BatteryWarningVerticalFill;
    