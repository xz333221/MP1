'use client'

import * as React from 'react'
import { GithubLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export function GithubRepo() {
  return (
    <Link
      href="https://github.com/SCLS-AI-Camp/MP1"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-md group flex  flex-row items-center justify-start font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
    >
      <GithubLogo size={18} weight="duotone" />
      <span className="sr-only">Github仓库</span>
    </Link>
  )
}
