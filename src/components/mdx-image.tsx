'use client'
import { usePostContext } from '@/lib/post-context'

function resolveSrc(src: string | undefined, slug: string | undefined): string | null {
  if (!src) return null
  // External URLs — use as-is
  if (src.startsWith('http://') || src.startsWith('https://')) return src
  // Already prefixed with /writing/ — use as-is
  if (src.startsWith('/writing/')) return src
  // Starts with / — prepend /writing/{slug}
  if (src.startsWith('/') && slug) return `/writing/${slug}${src}`
  // Starts with ./ — strip the dot and prepend /writing/{slug}
  if (src.startsWith('./') && slug) return `/writing/${slug}/${src.slice(2)}`
  // Plain filename — prepend /writing/{slug}/
  if (slug) return `/writing/${slug}/${src}`
  return src
}

export function MdxImage({ src, alt }: { src?: string; alt?: string }) {
  const ctx = usePostContext()
  const resolvedSrc = resolveSrc(src, ctx?.slug)
  if (!resolvedSrc) return null
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolvedSrc}
      alt={alt ?? ''}
      className="w-full h-auto rounded-lg my-6 border border-border"
      loading="lazy"
    />
  )
}
