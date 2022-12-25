import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";

export function ChordRow(props: NodeViewProps) {
    return (
        <NodeViewWrapper className="react-component text-green-700" contentEditable={true}>
            React Component
        </NodeViewWrapper>
    )
}