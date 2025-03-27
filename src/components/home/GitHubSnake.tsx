'use client'

export default function GitHubSnake() {
  return (
    <div className="w-full overflow-hidden">
      <div className='dark:hidden'>
        <img
          src="https://raw.githubusercontent.com/xz333221/xz333221/main/github-contribution-snake/github-contribution-grid-snake.svg"
          alt="github-contribution" />
      </div>
      <div className='hidden dark:block'>
        <img
          src="https://raw.githubusercontent.com/xz333221/xz333221/main/github-contribution-snake/github-contribution-grid-snake-dark.svg"
          alt="github-contribution-dark" />
      </div>
    </div>
  )
}