
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GiftRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 11.267v16M21.657 9.853C20.243 11.267 16 11.267 16 11.267s0-4.242 1.414-5.657a3 3 0 0 1 4.243 4.243v0ZM10.343 9.853C11.757 11.267 16 11.267 16 11.267s0-4.242-1.414-5.657a3 3 0 0 0-4.243 4.243v0Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M6 17.267h20v10H6zM4 11.267h24v6H4z"/></svg>
    });

    GiftRegular.displayName = "GiftRegular";

    export default GiftRegular;
    