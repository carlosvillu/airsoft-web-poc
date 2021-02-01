import React from 'https://cdn.skypack.dev/react'

import {Menu} from '../Menu'

const Topbar = ({children}) => {
  return (
    <div className="h-full d_flex ml-l mr-l ai_center bg-c-primary">
      <Menu />
    </div>
  )
}

export {Topbar}
