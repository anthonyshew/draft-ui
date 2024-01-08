'use client'

import { useEffect, useState } from 'react'

import {
  type ChangelogDocument,
  type ComponentDocument,
  type GeneralDocument,
} from 'contentlayer/generated'
import { GithubIcon, MenuIcon, TwitterIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  IconButton,
  iconButtonVariants,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from 'ui'

import { cx } from '@/lib/cva.config'

import LinkList from './link-list'
import { ModeToggle } from './mode-toggle'
import SearchComponent from './search-component'

export default function Navigation({
  gettingStartedList,
  componentList,
}: {
  gettingStartedList: (GeneralDocument | ChangelogDocument)[]
  componentList: ComponentDocument[]
}) {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(false)
  }, [pathname])

  return (
    <div className="light:shadow-sm fixed inset-x-0 top-0 z-50 h-14 border-b bg-white dark:border-b dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex h-full w-full items-center px-4">
        <Link
          prefetch={false}
          href="/"
          aria-label="Home"
          className="flex items-center gap-2 font-semibold"
        >
          <Image
            className="dark:invert"
            src="/draft_ui.svg"
            alt=""
            width={30}
            height={30}
          />
          <span>Draft UI</span>
        </Link>
        {/* Desktop Nav */}
        <div className="flex grow items-center">
          <div className="ml-14 hidden items-center gap-8 lg:flex">
            <Link
              prefetch={false}
              href="/getting-started"
              className="rounded-sm text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900"
            >
              Getting Started
            </Link>
            <Link
              prefetch={false}
              href="/docs/components"
              className="rounded-sm text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900"
            >
              Components
            </Link>
          </div>
          <div className="mx-auto flex lg:mx-0 lg:ml-auto">
            <div className="flex gap-2">
              <div className="hidden pr-2 md:block lg:pr-0">
                <SearchComponent />
              </div>
              <div className="hidden gap-2 lg:flex">
                <div>
                  <a
                    className={cx(
                      iconButtonVariants({ size: 'sm', variant: 'ghost' }),
                    )}
                    href="https://twitter.com/draft__ui"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to our Twitter account"
                  >
                    <TwitterIcon size="20" aria-hidden="true" />
                  </a>
                </div>
                <div>
                  <a
                    className={cx(
                      iconButtonVariants({ size: 'sm', variant: 'ghost' }),
                    )}
                    href="https://github.com/IHIutch/draft-ui"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to GitHub repository"
                  >
                    <GithubIcon size="20" aria-hidden="true" />
                  </a>
                </div>
                <div>
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="ml-auto flex lg:hidden">
          <div className="flex items-center gap-1 md:gap-2">
            <div>
              <a
                className={cx(
                  iconButtonVariants({ size: 'sm', variant: 'ghost' }),
                )}
                href="https://twitter.com/draft__ui"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to our Twitter account"
              >
                <TwitterIcon size="20" aria-hidden="true" />
              </a>
            </div>
            <div>
              <a
                className={cx(
                  iconButtonVariants({ size: 'sm', variant: 'ghost' }),
                )}
                href="https://github.com/IHIutch/draft-ui"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to GitHub repository"
              >
                <GithubIcon size="20" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
