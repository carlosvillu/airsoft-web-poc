import React from 'https://cdn.skypack.dev/react'
import ReactDOM from 'https://cdn.skypack.dev/react-dom'

import {App} from './Components/App'
import {Airsoft} from './domain'

window.domain = Airsoft.create()

ReactDOM.render(<App />, document.getElementById('app'))
