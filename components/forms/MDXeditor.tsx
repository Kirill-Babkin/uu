'use client'
// InitializedMDXEditor.tsx
import type { ForwardedRef } from 'react'
import {
  headingsPlugin,
  MDXEditor, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,

  type MDXEditorMethods,
  type MDXEditorProps,
  BlockTypeSelect,
  InsertTable,
  ListsToggle,
  DiffSourceToggleWrapper,
  diffSourcePlugin,
  tablePlugin,
  linkDialogPlugin,
  linkPlugin,
  frontmatterPlugin
} from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      className=''
      plugins={[
        // Example Plugin Usage
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo/>
              <BoldItalicUnderlineToggles />
              <BlockTypeSelect />
              <InsertTable />
              <ListsToggle />
            </>

          )
        }),
        listsPlugin(),
        quotePlugin(),
        headingsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
      ]}
      {...props}
      ref={editorRef}
    />
  )
}