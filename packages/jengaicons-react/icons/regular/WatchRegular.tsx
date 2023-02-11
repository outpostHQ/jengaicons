
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const WatchRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 24.808a8.308 8.308 0 1 0 0-16.616 8.308 8.308 0 0 0 0 16.616Z" stroke="#1C1B1F" strokeWidth="2" strokeMiterlimit="10"/><path d="M16 11.885V16.5h4.615M20.615 9.592 19.692 4.5h-7.384l-.923 5.092M20.615 23.408l-.923 5.092h-7.384l-.923-5.092" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    WatchRegular.displayName = "WatchRegular";

    export default WatchRegular;
    