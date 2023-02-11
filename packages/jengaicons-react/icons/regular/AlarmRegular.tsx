
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AlarmRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 10.715v6.6h6.6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 27.685c5.728 0 10.37-4.643 10.37-10.37 0-5.728-4.642-10.371-10.37-10.371-5.728 0-10.37 4.643-10.37 10.37 0 5.728 4.642 10.371 10.37 10.371Z" stroke="#1C1B1F" strokeWidth="2" strokeMiterlimit="10"/><path d="m24 5.315 4 4M4 9.315l4-4" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    AlarmRegular.displayName = "AlarmRegular";

    export default AlarmRegular;
    