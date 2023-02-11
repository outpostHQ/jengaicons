
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MagnetStraightRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M5.087 10.494h7.626M19.272 10.494h7.64M12.766 15.987V4H5.087v13.087C5.087 23.114 9.973 28 16 28s10.913-4.886 10.913-10.913V4h-7.637v11.987a3.255 3.255 0 1 1-6.51 0Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    MagnetStraightRegular.displayName = "MagnetStraightRegular";

    export default MagnetStraightRegular;
    