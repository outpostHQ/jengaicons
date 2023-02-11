const fs = require('fs')
const svg = require('svgson')

function readFile(pathname) {
    const file = fs.readFileSync(pathname);
    return file
      .toString("utf-8")
    //   .replace(/"#0+"/g, "{color}")
      .replace(/fill\-rule/g, "fillRule")
      .replace(/stroke-linecap/g, "strokeLinecap")
      .replace(/stroke-linejoin/g, "strokeLinejoin")
      .replace(/stroke-width/g, "strokeWidth")
      .replace(/stroke-miterlimit/g, "strokeMiterlimit");
}

const svgContent = readFile('../../assets/fill/Activity - filled.svg')

/** @param attrs {Record<string, string>} */
const genAttrString = (attrs)=>{

    return Object.entries(attrs).map(([key, val]) => `${key}="${val}"`).join(" ")
}

/** @param children {svg.INode[]} */
const genSVG = (children)=>{
    return children.map(svg.stringify).join('')
}

const transform = ({
    componentName, 
    defaultSize
}) => {

    const svgAST = svg.parseSync(svgContent)

    svgAST.attributes.width = defaultSize
    svgAST.attributes.height = defaultSize
    
    return `
    import * as React from "react";
    import { SVGSVGElement, forwardRef } from "react";
    import { JengaIconProps } from '../../types/base'

    const ${componentName} =  forwardRef<SVGSVGElement, JengaIconProps>({size = ${defaultSize}, ..rest}, ref) =>(
        
        <svg style={{width: size, height: size}} ${genAttrString(svgAST.attributes)} {...rest}>
            ${genSVG(svgAST.children)}
        </svg>

    ));
    
    
    export default ${componentName};
    `
}

console.log(transform({
    componentName: 'Activity',
    defaultSize: 32
}))