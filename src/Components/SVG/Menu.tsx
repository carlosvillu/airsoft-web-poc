import React from 'react'

type Props = {
  onClick: React.EventHandler<React.SyntheticEvent>,
  className?: string
}

const MenuSVG = ({ onClick, className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      style={{ width: 'var(--size-xs)', height: 'var(--size-xs)' }}
      onClick={onClick}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  )
}

export { MenuSVG }
