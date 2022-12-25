import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { ChordRow } from './ChordRow'

export const ChordRowNode = Node.create({
    name: 'chordRow',
    group: 'block',
    content: 'text*',
    atom: true,
    parseHTML() {
        return [
          {
            tag: 'chord-row',
          },
        ]
      },
    renderHTML({ HTMLAttributes }) {
        return ['chord-row', mergeAttributes(HTMLAttributes)]
    },
    addNodeView() {
        return ReactNodeViewRenderer(ChordRow)
    },
})
