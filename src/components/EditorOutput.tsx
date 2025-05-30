'use client'

import dynamic from 'next/dynamic'
import { FC } from 'react'

import CustomCodeRenderer   from '@/components/renderers/CustomCodeRenderer'
import CustomImageRenderer  from '@/components/renderers/CustomImageRenderer'
import CustomTableRenderer  from '@/components/renderers/CustomTableRenderer' 

// lazy-load the library; no SSR
const Output = dynamic(
  () => import('editorjs-react-renderer').then(mod => mod.default),
  { ssr: false }
)

interface EditorOutputProps {
  content: any
}

// register every custom block you support
const renderers = {
  image:  CustomImageRenderer,
  code:   CustomCodeRenderer,
  table:  CustomTableRenderer,          // ★ NEW
}

const style = {
  paragraph: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
}

const EditorOutput: FC<EditorOutputProps> = ({ content }) => (
  // @ts-ignore  — editorjs-react-renderer types are imperfect
  <Output
    style={style}
    className="text-sm"
    renderers={renderers}
    data={content}
  />
)

export default EditorOutput
