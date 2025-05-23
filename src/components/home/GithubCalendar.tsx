'use client'

import GitHubCalendar from 'react-github-calendar'
import { githubUsername } from '@/config/infoConfig'


export default function GithubContributions() {
  return (
    <div className="w-full overflow-hidden">
      <div className='dark:hidden'>
        <GitHubCalendar
          username="xz333221"
          colorScheme='light'
          fontSize={12}
          blockSize={12}
          blockMargin={5}
          blockRadius={4}
        />
      </div>
      <div className='hidden dark:block'>
        <GitHubCalendar
          username="xz333221"
          colorScheme='dark'
          fontSize={12}
          blockSize={12}
          blockMargin={5}
          blockRadius={4}
        />
      </div>
    </div>
  )
}