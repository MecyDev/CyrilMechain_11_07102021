import { Component } from 'react'
import { Link } from 'react-router-dom'

import './error.css'

class Error extends Component {
  render() {
    return (
      <div className="error-page">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    )
  }
}

export default Error
