import { Component } from 'react'
import Navigation from '../Navigation'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import './header.css'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <Link to="/">
              <img
                className="header__img"
                src={logo}
                alt="Logo du site de location d'appartements Kasa"
              />
            </Link>
          </div>
          <Navigation />
        </header>
      </div>
    )
  }
}
export default Header
