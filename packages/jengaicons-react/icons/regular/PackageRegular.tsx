
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PackageRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m5.216 10.003 10.722-6 10.722 6V22l-10.722 6-10.722-6V10.003Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M21.507 18.753v-5.841L10.815 6.953" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M26.66 10.004 16.107 16 5.34 10.003M16.057 15.82v11.879" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    PackageRegular.displayName = "PackageRegular";

    export default PackageRegular;
    