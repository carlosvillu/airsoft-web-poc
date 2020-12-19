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
      <header class=" ga_header h-s bd_black">
        <${Topbar} />
      </header>

      <nav class="ga_nav d_none tld__d_block ">
        <${Navigation} />
      </nav>

      <main class="ga_content ">
        ${children}
      </main>

      <aside class="ga_side d_none d__d_block ">
        ASIDE
      </aside>

      <footer class="ga_footer h-s ">
        <${Footer} />
      </footer>
    </section>
  `
}

export {Layout}
