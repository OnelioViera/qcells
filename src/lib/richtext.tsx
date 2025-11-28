/**
 * Simple Rich Text Renderer for Strapi Blocks format
 */

import React from 'react'

interface RichTextNode {
  type: string
  children?: RichTextNode[]
  text?: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  code?: boolean
  level?: number
  format?: string
  url?: string
}

export function renderRichText(content: any): React.ReactNode {
  if (!content || !Array.isArray(content)) {
    return null
  }

  return content.map((node, index) => renderNode(node, index))
}

function renderNode(node: RichTextNode, index: number): React.ReactNode {
  if (!node) return null

  // Handle text nodes
  if (node.text !== undefined) {
    let text: React.ReactNode = node.text

    if (node.bold) text = <strong key={index}>{text}</strong>
    if (node.italic) text = <em key={index}>{text}</em>
    if (node.underline) text = <u key={index}>{text}</u>
    if (node.strikethrough) text = <s key={index}>{text}</s>
    if (node.code) text = <code key={index}>{text}</code>

    return <React.Fragment key={index}>{text}</React.Fragment>
  }

  // Handle block nodes
  const children = node.children?.map((child, i) => renderNode(child, i))

  switch (node.type) {
    case 'paragraph':
      return <p key={index} className="mb-4">{children}</p>

    case 'heading':
      const HeadingTag = `h${node.level || 1}` as keyof JSX.IntrinsicElements
      const headingClasses = {
        1: 'text-4xl font-bold mb-4',
        2: 'text-3xl font-bold mb-3',
        3: 'text-2xl font-bold mb-3',
        4: 'text-xl font-bold mb-2',
        5: 'text-lg font-bold mb-2',
        6: 'text-base font-bold mb-2',
      }
      return (
        <HeadingTag key={index} className={headingClasses[node.level || 1]}>
          {children}
        </HeadingTag>
      )

    case 'list':
      if (node.format === 'ordered') {
        return <ol key={index} className="list-decimal list-inside mb-4">{children}</ol>
      }
      return <ul key={index} className="list-disc list-inside mb-4">{children}</ul>

    case 'list-item':
      return <li key={index}>{children}</li>

    case 'link':
      return (
        <a
          key={index}
          href={node.url}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )

    case 'quote':
      return (
        <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic mb-4">
          {children}
        </blockquote>
      )

    case 'code':
      return (
        <pre key={index} className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{children}</code>
        </pre>
      )

    default:
      return <React.Fragment key={index}>{children}</React.Fragment>
  }
}

