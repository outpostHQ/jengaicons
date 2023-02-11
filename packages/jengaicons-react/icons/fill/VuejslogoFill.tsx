
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const VuejslogoFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m16.96 11.266-2.771-4.8H10.22l6.74 11.672 6.738-11.672h-3.967l-2.772 4.8Z" fill="#1C1B1F"/><path d="m24.622 6.466-7.662 13.27L9.3 6.466H4.96l12 20.785 12-20.785h-4.338Z" fill="#1C1B1F"/></svg>
    });

    VuejslogoFill.displayName = "VuejslogoFill";

    export default VuejslogoFill;
    