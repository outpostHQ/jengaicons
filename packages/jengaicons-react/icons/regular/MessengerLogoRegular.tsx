
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MessengerLogoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M5.68 22.122a12 12 0 1 1 4.198 4.199h0L5.73 27.505a1.001 1.001 0 0 1-1.236-1.236l1.184-4.147h0Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m10.002 17.996 4.002-4.002 4.002 4.002 4.001-4.002" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    MessengerLogoRegular.displayName = "MessengerLogoRegular";

    export default MessengerLogoRegular;
    