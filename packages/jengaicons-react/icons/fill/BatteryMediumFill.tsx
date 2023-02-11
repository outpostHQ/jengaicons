
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BatteryMediumFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.96 8.428a1 1 0 0 0-1 1v13.71a1 1 0 0 0 1 1h18.073a1 1 0 0 0 1-1V9.427a1 1 0 0 0-1-1H5.96Zm8 2.855a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-10Zm-5-1a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0v-10a1 1 0 0 1 1-1Zm21 2.509a1 1 0 0 0-2 0v6.982a1 1 0 1 0 2 0v-6.982Z" fill="#1C1B1F"/></svg>
    });

    BatteryMediumFill.displayName = "BatteryMediumFill";

    export default BatteryMediumFill;
    