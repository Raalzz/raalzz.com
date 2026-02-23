'use client'
import { createContext, useContext } from 'react'

const PostContext = createContext<{ slug: string } | null>(null)

export function PostContextProvider({
  slug,
  children,
}: {
  slug: string
  children: React.ReactNode
}) {
  return <PostContext.Provider value={{ slug }}>{children}</PostContext.Provider>
}

export function usePostContext() {
  return useContext(PostContext)
}
