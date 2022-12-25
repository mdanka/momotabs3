'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


export default function Page() {
    const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        content: '<p>Hello World!</p>',
      })

    return (
        <div>
            <EditorContent editor={editor} />
        </div>
    )
}
