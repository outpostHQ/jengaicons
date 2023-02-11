
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const EnvelopeSimpleOpenRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28 27.003v-14L15.972 4.996 4 13.002v14h24Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="m4.065 13.069 9.447 6.62h4.545l9.484-6.62" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    EnvelopeSimpleOpenRegular.displayName = "EnvelopeSimpleOpenRegular";

    export default EnvelopeSimpleOpenRegular;
    