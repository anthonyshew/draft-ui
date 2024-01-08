import {
  allChangelogDocuments,
  allComponentDocuments,
  allGeneralDocuments,
} from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import JumpToContentMenu from '@/components/docs/jump-to-content-menu'
import LinkList from '@/components/link-list'
import Navigation from '@/components/navigation'

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sortedComponents = allComponentDocuments
    .filter((doc) => doc.isComponent === true)
    .sort((a, b) => a.title.localeCompare(b.title))

  const sortedDocuments = [
    ...allGeneralDocuments,
    ...allChangelogDocuments,
  ].sort((a, b) => a.order - b.order)

  const post = allChangelogDocuments[0]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto h-full px-4">
      {/* <JumpToContentMenu toc={post.toc} /> */}
      <Navigation
        gettingStartedList={sortedDocuments}
        componentList={sortedComponents}
      />
      <div className="pt-16 lg:ml-56">
        <main className="flex" id="page-content" tabIndex={-1}>
          {children}
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  )
}
