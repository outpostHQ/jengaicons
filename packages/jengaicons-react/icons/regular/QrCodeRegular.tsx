
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const QrCodeRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M18.4 18.4v4.8M18.4 28h4.8v-9.6M23.2 20.8H28M28 25.6V28" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 4h9.6v9.6H4V4ZM4 18.4h9.6V28H4v-9.6ZM18.4 4H28v9.6h-9.6V4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    QrCodeRegular.displayName = "QrCodeRegular";

    export default QrCodeRegular;
    