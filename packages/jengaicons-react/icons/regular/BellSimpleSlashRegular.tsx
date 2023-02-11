
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BellSimpleSlashRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12 27.997h8M6 5l20 22M26.874 23.073s-2.566-3.65-3-6.13a11.308 11.308 0 0 1-.122-2.596C24.04 9.41 20.944 4 16 4c-1.954 0-3.619.845-4.9 2.171m11.107 16.902H5.126s2.566-3.65 3-6.13c.144-.828.174-1.705.122-2.596a11.673 11.673 0 0 1 .956-5.294" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    BellSimpleSlashRegular.displayName = "BellSimpleSlashRegular";

    export default BellSimpleSlashRegular;
    