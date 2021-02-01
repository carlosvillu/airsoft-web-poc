import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './Components/App'
import { Airsoft } from './domain'

window.domain = Airsoft.create()

ReactDOM.render(<App />, document.getElementById('app'))
