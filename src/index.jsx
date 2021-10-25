import React from 'react'
import ReactDOM from 'react-dom'
import Routing from './components/Routing'

import './styles/minireset.min.css'
import './styles/index.css'
import './styles/responsive.css'

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
)
