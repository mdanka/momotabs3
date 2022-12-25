'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { ChordRowNode } from './ChordRowNode'


export default function Page() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            ChordRowNode,
        ],
        content: '<p>Hello World!</p><chord-row>hello</chord-row>',
        editorProps: {
            attributes: {
              class: 'prose dark:prose-invert prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
            },
        },
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
