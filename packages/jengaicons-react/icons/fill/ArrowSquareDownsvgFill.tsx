
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowSquareDownsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m12.717 17.04 4.243 4.243 4.243-4.243M16.96 11.283v10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clip-rule="evenodd" d="M6.96 4.283a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2h-20Zm10 18a.997.997 0 0 0 .713-.298l4.237-4.238a1 1 0 0 0-1.414-1.414L17.96 18.87v-7.586a1 1 0 1 0-2 0v7.586l-2.535-2.536a1 1 0 0 0-1.415 1.414l4.243 4.243a.997.997 0 0 0 .707.293Z" fill="#1C1B1F"/></svg>
    });

    ArrowSquareDownsvgFill.displayName = "ArrowSquareDownsvgFill";

    export default ArrowSquareDownsvgFill;
    