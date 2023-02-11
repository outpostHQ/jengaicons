
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TrayRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 4h24v24H4V4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M4 20.432h5.264l3.566 3.209h6.113l3.227-3.209H28" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    TrayRegular.displayName = "TrayRegular";

    export default TrayRegular;
    