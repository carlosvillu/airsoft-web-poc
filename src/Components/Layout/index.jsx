import React from 'https://cdn.skypack.dev/react'
import {Footer} from '../Footer'
import {Topbar} from '../Topbar'
import {Navigation} from '../Navigation'

const Layout = ({children}) => {
  return (
    <section
      className="
        d_grid
        gta-holy-layout
        gtc-holy-layout
        gtr-holy-layout
        gg-holy-layout
        h_100vh
        tld__gta-holy-layout
        tld__gtc-holy-layout
        d__gta-holy-layout
        d__gtc-holy-layout"
    >
      <header className=" ga_header h-s bd_black">
        <Topbar />
      </header>

      <nav className="ga_nav d_none tld__d_block ">
        <Navigation />
      </nav>

      <main className="ga_content ">{children}</main>

      <aside className="ga_side d_none d__d_block ">ASIDE</aside>

      <footer className="ga_footer h-s ">
        <Footer />
      </footer>
    </section>
  )
}

export {Layout}
