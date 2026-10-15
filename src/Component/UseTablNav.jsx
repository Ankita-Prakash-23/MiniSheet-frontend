
import { useCallback } from 'react'

const getColumnName = (index) => {
  let name = ''

  while (index >= 0) {
    name = String.fromCharCode((index % 26) + 65) + name
    index = Math.floor(index / 26) - 1
  }

  return name
}

const UseTablNav = ({ rows, columns, setSelectedCell }) => {
  const handleKeyDown = useCallback((e, address) => {
    const match = address.match(/^([A-Z]+)(\d+)$/)
    if (!match) return

    const row = Number(match[2]) - 1

    let col = 0
    for (const char of match[1]) {
      col = col * 26 + char.charCodeAt(0) - 64
    }
    col -= 1

    let nextRow = row
    let nextCol = col

    switch (e.key) {
      case 'ArrowUp':
        nextRow = Math.max(0, row - 1)
        break

      case 'ArrowDown':
      case 'Enter':
        e.preventDefault()
        nextRow = Math.min(rows - 1, row + 1)
        break

      case 'ArrowLeft':
        if (e.target.selectionStart !== 0) return
        nextCol = Math.max(0, col - 1)
        break

      case 'ArrowRight':
        if (e.target.selectionEnd !== e.target.value.length) return
        nextCol = Math.min(columns - 1, col + 1)
        break

      case 'Tab':
        e.preventDefault()
        nextCol = e.shiftKey
          ? Math.max(0, col - 1)
          : Math.min(columns - 1, col + 1)
        break

      default:
        return
    }

    const nextAddress = `${getColumnName(nextCol)}${nextRow + 1}`

    setSelectedCell(nextAddress)

    document
      .querySelector(`[aria-label="${nextAddress}"]`)
      ?.focus()
  }, [rows, columns, setSelectedCell])

  return handleKeyDown
}

export default UseTablNav
