import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import {Footer} from '../Footer/Footer.js'
import {Topbar} from '../Topbar/Topbar.js'
import {Navigation} from '../Navigation/Navigation.js'

const Layout = ({children}) => {
  return html`
    <section
      class="
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
      <header class="debug ga_header h-s">
        <${Topbar} />
      </header>

      <nav class="ga_nav d_none tld__d_block debug">
        <${Navigation} />
      </nav>

      <main class="ga_content debug">
        ${children}
      </main>

      <aside class="ga_side d_none d__d_block debug">
        ASIDE
      </aside>

      <footer class="ga_footer h-s debug">
        <${Footer} />
      </footer>
    </section>
  `
}

export {Layout}
