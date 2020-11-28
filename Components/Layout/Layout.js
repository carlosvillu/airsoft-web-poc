import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import {Footer} from '../Footer/Footer.js'
import {Topbar} from '../Topbar/Topbar.js'
import {Navigation} from '../Navigation/Navigation.js'

const Layout = ({children}) => {
  return html`
    <section
      class="d_grid gta-holy-layout gtc-holy-layout gtr-holy-layout gg-holy-layout h_100vh"
    >
      <header class="debug ga_header h-s">
        <${Topbar} />
      </header>

      <nav class="ga_nav debug">
        <${Navigation} />
      </nav>

      <main class="ga_content debug">
        ${children}
      </main>

      <footer class="ga_footer h-s debug">
        <${Footer} />
      </footer>
    </section>
  `
}

export {Layout}
