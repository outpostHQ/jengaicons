
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BarcodesvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.96 11.283v10M22.96 11.283v10M18.96 11.283v10M14.96 11.283v10M10.96 6.283h-6v6M22.96 6.283h6v6M28.96 20.283v6h-6M4.96 20.283v6h6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    BarcodesvgFill.displayName = "BarcodesvgFill";

    export default BarcodesvgFill;
    