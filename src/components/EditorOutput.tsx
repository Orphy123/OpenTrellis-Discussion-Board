'use client'

import CustomCodeRenderer from '@/components/renderers/CustomCodeRenderer'
import CustomImageRenderer from '@/components/renderers/CustomImageRenderer'
import { FC } from 'react'
import dynamic from 'next/dynamic'

const Output = dynamic(
  async () => (await import('editorjs-react-renderer')).default,
  { ssr: false }
)

interface EditorOutputProps {
  content: any
}

const renderers = {
  image: CustomImageRenderer,
  code: CustomCodeRenderer,
}

const style = {
  paragraph: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
}
const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
  // Check if content or content.blocks is undefined
  if (!content || !Array.isArray(content.blocks)) {
    console.error('Invalid content structure:', content);
    return <div>Content is not available or in an incorrect format.</div>;
  }

  return (
    <Output
      style={style}
      className='text-sm'
      renderers={renderers}
      data={content}
    />
  )
}

// const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
//   return (
//     // @ts-expect-error
//     <Output
//       style={style}
//       className='text-sm'
//       renderers={renderers}
//       data={content}
//     />
//   )
// }

export default EditorOutput
