
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PaintBrushBroadRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M5.423 13.576h21.154M22.731 4v5.73M10.423 4h16.154v14.241h-7.692l.615 6.05a3.369 3.369 0 1 1-6.704 0l.615-6.05H5.423V9a5 5 0 0 1 5-5Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    PaintBrushBroadRegular.displayName = "PaintBrushBroadRegular";

    export default PaintBrushBroadRegular;
    