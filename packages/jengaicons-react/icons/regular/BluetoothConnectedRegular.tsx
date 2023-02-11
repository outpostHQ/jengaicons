
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BluetoothConnectedRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m7.5 10 8 6M7.5 22l8-6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM25 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#1C1B1F"/><path d="m23.5 10-8-6v12l8-6ZM23.5 22l-8-6v12l8-6Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    BluetoothConnectedRegular.displayName = "BluetoothConnectedRegular";

    export default BluetoothConnectedRegular;
    