
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MonitorPlayRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M20 27h-8" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m19.322 14-6.643 3.835v-7.67L19.322 14Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M4 5h24v18H4V5Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    MonitorPlayRegular.displayName = "MonitorPlayRegular";

    export default MonitorPlayRegular;
    