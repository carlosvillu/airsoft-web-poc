import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

const CloseSVG = ({onClick, className}) => {
  return html`
    <svg
      class="${className}"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style="width: var(--size-xs); height: var(--size-xs)"
      onClick=${onClick}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      ></path>
    </svg>
  `
}

export {CloseSVG}
