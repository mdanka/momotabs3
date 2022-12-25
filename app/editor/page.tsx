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
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <EditorContent editor={editor} />
        </div>
    )
}
