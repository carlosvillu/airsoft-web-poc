import React, { Fragment, useState } from 'react'
import cx from 'classnames'

import { MenuSVG } from '../SVG/Menu.jsx'
import { CloseSVG } from '../SVG/Close.jsx'
import { Navigation } from '../Navigation'

const Menu = () => {
  const [open, setOpen] = useState(false)
  const classContainerContent = cx(
    'h_100vh w_100vw pos_absolute t-init l-init bgc-primary',
    {
      d_none: !open
    }
  )

  const closePanel = () => setOpen(false)

  return (
    <Fragment>
      <MenuSVG className="tld__d_none" onClick={() => setOpen(true)} />
      <div className={classContainerContent}>
        <header className="h-s d_flex pl-l pr-l ai_center jc_flex-end ">
          <CloseSVG onClick={closePanel} />
        </header>
        <div className="p-xl">
          <Navigation onNavigate={closePanel} />
        </div>
      </div>
    </Fragment>
  )
}

export { Menu }
