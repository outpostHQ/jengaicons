import { NextRequest, NextResponse } from "next/server"
import * as fs from "fs-extra"
import * as path from "path"

export async function GET(request: NextRequest) {
  const svgNodesDir = path.join(process.cwd(), "../docs/data/icon-nodes")

  try {
    const files = await fs.readdir(svgNodesDir)
    const iconNodes: { [key: string]: any } = {}

    for (const file of files) {
      const filePath = path.join(svgNodesDir, file)
      const fileContent = await fs.readFile(filePath, "utf-8")
      const iconName = path.basename(file, ".node.json")
      iconNodes[iconName] = JSON.parse(fileContent)
    }

    return NextResponse.json(iconNodes, { status: 200 })
  } catch (error) {
    console.error("Error reading icon nodes:", error)
    return NextResponse.json(
      { error: "Failed to load icon nodes" },
      { status: 500 },
    )
  }
}
