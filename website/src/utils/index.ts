export const copyToClipboard = (text: string): boolean => {
  let isCopied = false

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => (isCopied = true))
      .catch((err) => (isCopied = false))
  }

  if (isCopied) return true

  // ...Otherwise, use document.execCommand() fallback

  // Put the text to copy into a <span>
  const span = document.createElement("span")
  span.textContent = text

  // Preserve consecutive spaces and newlines
  span.style.whiteSpace = "pre"

  // Add the <span> to the page
  document.body.appendChild(span)

  // Make a selection object representing the range of text selected by the user
  const selection = window.getSelection()

  if (!selection) return (isCopied = false)

  const range = window.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  // Copy text to the clipboard

  try {
    isCopied = window.document.execCommand("copy")
  } catch (err) {
    console.log("error", err)
  }

  // Cleanup
  selection.removeAllRanges()
  window.document.body.removeChild(span)

  return isCopied
}
